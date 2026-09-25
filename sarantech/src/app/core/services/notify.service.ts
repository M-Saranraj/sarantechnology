import { Injectable } from '@angular/core';
import { SITE_CONFIG } from '../config/site-config';

export interface EnquiryDetails {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  location: string;
  serviceNeeded: string;
  budget: string;
  description: string;
}

/**
 * Turns a filled-in enquiry into WhatsApp / SMS / Email links, pre-filled
 * with the enquiry details. There is no backend in this version — the
 * visitor's own app opens with the message ready, and they press send.
 * This is intentionally isolated behind one service so a real backend API
 * can replace it later without touching the form component.
 */
@Injectable({ providedIn: 'root' })
export class NotifyService {
  private formatMessage(d: EnquiryDetails): string {
    const lines = [
      `Hi ${SITE_CONFIG.businessName}, I'd like to discuss a project.`,
      '',
      `Name: ${d.name}`,
      d.businessName ? `Business: ${d.businessName}` : '',
      `What I need: ${d.serviceNeeded}`,
      d.budget ? `Approximate budget: ${d.budget}` : '',
      d.location ? `Location: ${d.location}` : '',
      '',
      d.description,
    ];
    return lines.filter(Boolean).join('\n');
  }

  whatsappUrl(d: EnquiryDetails): string {
    const text = encodeURIComponent(this.formatMessage(d));
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  }

  smsUrl(d: EnquiryDetails): string {
    const text = encodeURIComponent(this.formatMessage(d));
    return `sms:${SITE_CONFIG.phone.replace(/\s+/g, '')}?body=${text}`;
  }

  mailUrl(d: EnquiryDetails): string {
    const subject = encodeURIComponent(`Project enquiry — ${d.serviceNeeded}`);
    const body = encodeURIComponent(this.formatMessage(d) + `\n\nReply to: ${d.email}`);
    return `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  }
}
