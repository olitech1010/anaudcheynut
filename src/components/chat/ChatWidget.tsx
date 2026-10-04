"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

interface SpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
}

interface Window {
  SpeechRecognition: {
    new (): SpeechRecognition;
  };
  webkitSpeechRecognition: {
    new (): SpeechRecognition;
  };
}

type Message = {
  role: "user" | "model";
  parts: [{ text: string }];
};

type VoiceState = 'idle' | 'listening' | 'speaking' | 'error';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [voiceMode, setVoiceMode] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);
  const isListeningRef = useRef(false);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        stopVoiceMode();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const initSpeechRecognition = useCallback(() => {
    if (typeof window === 'undefined') return null;
    
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    const recognition = new SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    
    return recognition;
  }, []);

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    const voices = window.speechSynthesis.getVoices();
    const frenchVoice = voices.find(v => v.lang.startsWith('fr')) || voices.find(v => v.name.includes('French'));
    if (frenchVoice) utterance.voice = frenchVoice;
    
    utterance.onstart = () => setVoiceState('speaking');
    utterance.onend = () => {
      setVoiceState(voiceMode ? 'listening' : 'idle');
      if (voiceMode && isListeningRef.current) {
        startListening();
      }
    };
    utterance.onerror = () => {
      setVoiceState(voiceMode ? 'listening' : 'idle');
    };
    
    currentUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [voiceMode]);

  const startListening = useCallback(() => {
    if (isListeningRef.current) return;
    
    const recognition = initSpeechRecognition();
    if (!recognition) {
      setVoiceState('error');
      setIsError(true);
      return;
    }
    
    recognitionRef.current = recognition;
    isListeningRef.current = true;
    setVoiceState('listening');
    
    let finalTranscript = '';
    
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
    };
    
    recognition.onend = () => {
      isListeningRef.current = false;
      if (finalTranscript.trim()) {
        handleVoiceInput(finalTranscript.trim());
      } else if (voiceMode) {
        setTimeout(() => startListening(), 500);
      }
    };
    
    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error);
      isListeningRef.current = false;
      if (event.error !== 'no-speech' && event.error !== 'aborted') {
        setVoiceState('error');
        setIsError(true);
      } else if (voiceMode) {
        setTimeout(() => startListening(), 1000);
      }
    };
    
    try {
      recognition.start();
    } catch (err) {
      console.error('Error starting recognition:', err);
      isListeningRef.current = false;
      setVoiceState('error');
    }
  }, [initSpeechRecognition, voiceMode]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListeningRef.current) {
      isListeningRef.current = false;
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
  }, []);

  const handleVoiceInput = async (text: string) => {
    setMessages(prev => [...prev, { role: "user", parts: [{ text }] }]);
    
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", parts: [{ text }] }],
          locale: "fr",
        }),
      });

      if (!res.ok) throw new Error(res.statusText);
      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let modelMessage = "";

      setMessages(prev => [...prev, { role: "model", parts: [{ text: "" }] }]);

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          modelMessage += chunk;
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "model",
              parts: [{ text: modelMessage }],
            };
            return updated;
          });
        }
      }
      
      if (voiceMode && modelMessage.trim()) {
        speak(modelMessage);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setIsError(true);
    }
  };

  const connectVoice = useCallback(() => {
    setVoiceMode(true);
    setVoiceState('listening');
    startListening();
  }, [startListening]);

  const disconnectVoice = useCallback(() => {
    setVoiceMode(false);
    stopListening();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setVoiceState('idle');
  }, [stopListening]);

  const toggleVoiceMode = useCallback(() => {
    if (voiceMode) {
      disconnectVoice();
    } else {
      connectVoice();
    }
  }, [voiceMode, connectVoice, disconnectVoice]);

  const stopVoiceMode = useCallback(() => {
    if (voiceMode) {
      disconnectVoice();
      setVoiceMode(false);
    }
  }, [voiceMode, disconnectVoice]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsError(false);
    
    const newMessages: Message[] = [
      ...messages,
      { role: "user", parts: [{ text: userMessage }] },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          locale: "fr",
        }),
      });

      if (!res.ok) {
        if (res.status === 503) {
           setMessages((prev) => [
             ...prev,
             { role: "model", parts: [{ text: "Le service de messagerie est actuellement indisponible." }] }
           ]);
           return;
        }
        throw new Error(res.statusText);
      }

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let modelMessage = "";

      setMessages((prev) => [
        ...prev,
        { role: "model", parts: [{ text: "" }] },
      ]);

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          modelMessage += chunk;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "model",
              parts: [{ text: modelMessage }],
            };
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
    return () => {
      stopVoiceMode();
    };
  }, [stopVoiceMode]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat Panel */}
      <div
        className={`transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 mb-4 pointer-events-auto"
            : "opacity-0 scale-95 h-0 overflow-hidden pointer-events-none"
        } w-[calc(100vw-2rem)] sm:w-[350px] sm:max-w-sm flex flex-col bg-white border border-stone-200 shadow-xl rounded-2xl overflow-hidden`}
        style={{ height: isOpen ? '500px' : '0px', maxHeight: 'calc(100vh - 6rem)' }}
      >
        <div className="bg-navy-900 text-stone-50 p-4 flex justify-between items-center shrink-0">
          <div className="font-semibold text-lg font-montserrat">Assistant du Cabinet</div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleVoiceMode}
              disabled={voiceState === 'error'}
              className={`text-stone-300 hover:text-white transition-colors p-1 rounded-full ${
                voiceMode ? 'bg-gold-500/20 text-gold-500' : ''
              } ${voiceState === 'listening' ? 'animate-pulse bg-red-500/20 text-red-500' : ''} ${voiceState === 'speaking' ? 'bg-blue-500/20 text-blue-500' : ''}`}
              aria-label={voiceMode ? "Désactiver la voix" : "Activer la voix"}
              title={voiceMode ? "Désactiver le mode vocal" : "Activer le mode vocal"}
            >
              {voiceState === 'listening' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="22"/>
                </svg>
              ) : voiceState === 'speaking' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="22"/>
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-white transition-colors p-1"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="bg-gold-500/10 border-b border-gold-500/20 p-3 text-xs text-stone-600 text-center shrink-0 flex items-center justify-center gap-2">
          {voiceMode 
            ? voiceState === 'listening' 
              ? <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" className="text-red-500 animate-pulse">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="22"/>
                  </svg>
                  <span>J'écoute... Parlez maintenant</span>
                </>
              : voiceState === 'speaking'
              ? <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  </svg>
                  <span>L'assistant parle...</span>
                </>
              : <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="22"/>
                  </svg>
                  <span>Mode vocal activé</span>
                </>
            : <>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                <span>Cet assistant fournit des informations administratives. Pour un conseil juridique, contactez Me Cheynut.</span>
              </>
          }
        </div>

        <div className="flex-grow p-4 overflow-y-auto bg-stone-50 flex flex-col gap-3">
          {messages.length === 0 && !voiceMode && (
            <div className="text-center text-stone-500 text-sm mt-10">
              Bonjour. Comment puis-je vous aider concernant les informations du cabinet ?
            </div>
          )}
          {voiceMode && messages.length === 0 && (
            <div className="text-center text-stone-500 text-sm mt-10">
              {voiceState === 'listening' && "Dites bonjour pour commencer..."}
            </div>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-2xl p-3 text-sm whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-navy-900 text-white self-end rounded-tr-sm"
                  : "bg-white border border-stone-200 text-stone-700 self-start rounded-tl-sm"
              }`}
            >
              {m.parts[0].text}
            </div>
          ))}
          {isLoading && messages.length > 0 && !messages[messages.length - 1]?.parts[0].text && (
             <div className="max-w-[85%] rounded-2xl p-3 text-sm bg-white border border-stone-200 text-stone-500 self-start rounded-tl-sm animate-pulse">
               ...
             </div>
          )}
          {isError && (
             <div className="text-center text-red-500 text-xs mt-2">
               Une erreur est survenue. Veuillez réessayer.
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {!voiceMode && (
          <div className="p-3 bg-white border-t border-stone-200 shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question..."
                className="flex-grow bg-stone-100 border-none rounded-full px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSubmit}
                disabled={!input.trim() || isLoading}
                className="bg-gold-500 text-navy-900 p-2 rounded-full hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[36px]"
                aria-label="Envoyer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "scale-0 opacity-0 hidden" : "scale-100 opacity-100"
        } transition-transform duration-300 ease-in-out bg-navy-900 text-gold-500 p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-navy-800 flex items-center justify-center`}
        aria-label="Ouvrir l'assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
        </svg>
      </button>
    </div>
  );
}