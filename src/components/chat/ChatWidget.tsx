"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "model";
  parts: [{ text: string }];
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

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
              { role: "model", parts: [{ text: "Le service de messagerie est actuellement indisponible (Clé API manquante)." }] }
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
        
        <div className="bg-gold-500/10 border-b border-gold-500/20 p-3 text-xs text-stone-600 text-center shrink-0">
          Cet assistant fournit des informations administratives uniquement. Pour tout conseil juridique, contactez Me Cheynut.
        </div>

        <div className="flex-grow p-4 overflow-y-auto bg-stone-50 flex flex-col gap-3">
          {messages.length === 0 && (
            <div className="text-center text-stone-500 text-sm mt-10">
              Bonjour. Comment puis-je vous aider concernant les informations du cabinet ?
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
