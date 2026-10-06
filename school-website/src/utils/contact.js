export const CONTACT_EMAIL = 'karlilinux097@gmail.com'

export function buildContactMailto({ name, email, phone, subject, message }) {
  const body = [
    `Name: ${name.trim()}`,
    `Reply email: ${email.trim()}`,
    phone?.trim() ? `Phone: ${phone.trim()}` : null,
    '',
    message.trim(),
  ].filter(line => line !== null).join('\n')

  const emailSubject = subject.trim() || 'General Inquiry'
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`
}
