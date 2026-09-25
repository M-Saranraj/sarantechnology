export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'How much does a website cost?',
    answer: 'It depends on what you need — a simple business website costs less than a custom web application or online store. Tell us your requirement and we\'ll discuss a price that fits your budget before any work begins.',
  },
  {
    question: 'How long does website development take?',
    answer: 'A straightforward business website typically takes a few weeks. Larger web applications or custom software take longer depending on scope. We\'ll give you a realistic timeline once we understand the requirement.',
  },
  {
    question: 'Can you build a custom application for my business?',
    answer: 'Yes — custom web and mobile applications built around your specific workflow are one of our core services.',
  },
  {
    question: 'Can you build an e-commerce website?',
    answer: 'Yes, including product catalog, cart and order management. Payment gateway integration is scoped per project based on what you actually need.',
  },
  {
    question: 'Can you create a mobile application?',
    answer: 'Yes, for Android and iOS, depending on your requirement and budget.',
  },
  {
    question: 'Can you improve my existing website?',
    answer: 'Yes — we take on maintenance and improvement work for existing sites and applications, including ones we did not originally build.',
  },
  {
    question: 'Can you maintain an existing application?',
    answer: 'Yes, ongoing maintenance — bug fixes, performance improvements and new features — is available as a service.',
  },
  {
    question: 'Can you integrate AI into my application?',
    answer: 'Where it provides real, practical value — such as document processing or intelligent search — yes. We\'ll be upfront if AI is not the right fit for a particular problem.',
  },
  {
    question: 'Do you provide hosting and deployment support?',
    answer: 'Yes, we can help with hosting and deployment as part of the project or as ongoing support.',
  },
  {
    question: 'How do I start a project?',
    answer: 'Reach out on WhatsApp, by phone, email, or the contact form — tell us what you need, and we\'ll take it from there.',
  },
];
