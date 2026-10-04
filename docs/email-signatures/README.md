# Email Signatures & Hostinger Mail Configuration

This directory contains HTML email signatures for the mailboxes at `arnaudcheynut.com`.

## 1. Mail Server Settings

### Outgoing Mail (SMTP)
- **Server:** `smtp.hostinger.com`
- **Port:** `465` (SSL) or `587` (TLS/STARTTLS)
- **Authentication:** Required (username and password)
- **Username:** Full email address (e.g., `contact@arnaudcheynut.com`)
- **Password:** The mailbox password

### Incoming Mail (IMAP)
- **Server:** `imap.hostinger.com`
- **Port:** `993`
- **Security:** SSL
- **Username:** Full email address
- **Password:** The mailbox password

---

## 2. Signature Files

| Mailbox | File | Description |
|---|---|---|
| `info@arnaudcheynut.com` | `signature-info.html` | General inquiries signature with website logo |
| `contact@arnaudcheynut.com` | `signature-contact.html` | Client intake & form confirmations signature with website logo |
| `arnaud@arnaudcheynut.com` | `signature-arnaud.html` | Direct lawyer correspondence signature with website logo |

All signatures embed the official website brand mark hosted live at `https://www.arnaudcheynut.com`.

---

## 3. How to Install in Your Mail App

### Apple Mail (macOS)
1. Open the HTML signature file in your browser (`signature-contact.html`, `signature-info.html`, or `signature-arnaud.html`).
2. Press `Cmd + A` to select all, then `Cmd + C` to copy.
3. In Apple Mail, go to **Mail > Settings > Signatures**.
4. Choose the target email account, click **+** to add a new signature.
5. Uncheck "Always match my default message font".
6. Click into the preview area, press `Cmd + A`, then `Cmd + V` to paste.

### Microsoft Outlook
1. Open the HTML signature file in your browser and copy all content.
2. In Outlook, open **Settings > Accounts > Signatures**.
3. Create a new signature and paste the copied content into the editor box.
4. Save and set as default for new messages and replies.

### Webmail / Other Clients
- Copy the rendered HTML from the browser or the raw HTML table into the signature editor of your client.

---

## 4. Web Application Setup

The Next.js application connects to Hostinger SMTP using `nodemailer`.

Required environment variables in `.env.local`:
```bash
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contact@arnaudcheynut.com
SMTP_PASS=<your_mailbox_password>
CONTACT_EMAIL_TO=contact@arnaudcheynut.com
CONTACT_EMAIL_FROM=contact@arnaudcheynut.com
```
