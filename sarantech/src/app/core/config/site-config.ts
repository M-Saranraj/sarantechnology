/**
 * Central site configuration.
 *
 * Every business detail used anywhere in the app (contact info, socials,
 * WhatsApp number, canonical URL, etc.) is read from this single file.
 * Replace the PLACEHOLDER values below with real details before launch —
 * nothing else in the codebase needs to change.
 */
export interface SiteConfig {
  businessName: string;
  tagline: string;
  positioningStatement: string;
  founderName: string;
  location: string;
  email: string;
  phone: string;          // display format, e.g. "+91 90000 00000"
  whatsappNumber: string; // digits only, with country code, e.g. "919000000000"
  siteUrl: string;        // canonical production URL, no trailing slash
  social: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
  defaultWhatsappMessage: string;
}

export const SITE_CONFIG: SiteConfig = {
  businessName: 'SaranTech',
  tagline: 'Digital Solutions for Growing Businesses',
  positioningStatement: 'Affordable Digital Solutions for Growing Businesses',
  founderName: 'Saranraj M',
  location: 'Chennai, Tamil Nadu, India',

  // --- PLACEHOLDER: replace with real contact details before launch ---
  email: 'hello@sarantech.example',
  phone: '+91 00000 00000',
  whatsappNumber: '910000000000',
  siteUrl: 'https://sarantech.example',
  social: {
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  // --- end placeholders ---

  defaultWhatsappMessage:
    'Hi SaranTech, I would like to discuss a website/application for my business.',
};

/** Builds a wa.me link, optionally overriding the default message. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? SITE_CONFIG.defaultWhatsappMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

export function mailtoLink(subject?: string): string {
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${SITE_CONFIG.email}${s}`;
}

export function telLink(): string {
  return `tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`;
}
