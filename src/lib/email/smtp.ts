import nodemailer from "nodemailer";

/**
 * Hostinger SMTP transporter (ADR-006).
 * Credentials are read exclusively from environment variables — never hardcoded.
 * SSL on port 465. Falls back to TLS/587 if SMTP_PORT is set to 587.
 */
export function createTransporter() {
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}
