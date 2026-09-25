export interface ServiceItem {
  slug: string;
  name: string;
  shortDescription: string;
  icon: 'website' | 'webapp' | 'ecommerce' | 'mobile' | 'software' | 'automation' | 'ai' | 'maintenance';
  useCases: string[];
  longDescription: string;
  metaDescription: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'business-websites',
    name: 'Business Website Development',
    icon: 'website',
    shortDescription: 'Modern, responsive websites for businesses, professionals and local services.',
    useCases: ['Company websites', 'Service websites', 'Portfolio websites', 'Landing pages'],
    longDescription:
      'A well-built website is often the first impression a customer has of your business. We design and build clean, fast, mobile-first websites that explain what you do, build trust, and make it easy for visitors to get in touch — whether they land on your site from Google, Instagram or a WhatsApp share.',
    metaDescription:
      'Modern, mobile-friendly business website development in Chennai. Clean design, fast loading, built to turn visitors into enquiries.',
  },
  {
    slug: 'web-applications',
    name: 'Web Application Development',
    icon: 'webapp',
    shortDescription: 'Custom web applications designed around your business requirements.',
    useCases: ['Admin systems', 'Customer management systems', 'Booking systems', 'Employee portals', 'Management dashboards'],
    longDescription:
      'When a template or off-the-shelf tool cannot keep up with how your business actually works, a custom web application can be built around your exact process — from booking and scheduling systems to internal dashboards your team uses every day.',
    metaDescription:
      'Custom web application development — booking systems, admin dashboards and internal tools built around your business process.',
  },
  {
    slug: 'ecommerce',
    name: 'E-Commerce Solutions',
    icon: 'ecommerce',
    shortDescription: 'Online stores for businesses that want to sell products online.',
    useCases: ['Product catalog', 'Product search', 'Shopping cart', 'Order management', 'Admin management'],
    longDescription:
      'We build online stores that let customers browse your catalog, search for products and place orders, with an admin area for you to manage products and incoming orders. Payment gateway integration is scoped and quoted per project based on what your business actually needs.',
    metaDescription:
      'E-commerce website development with product catalog, cart and order management, tailored to your product range.',
  },
  {
    slug: 'mobile-applications',
    name: 'Mobile Application Development',
    icon: 'mobile',
    shortDescription: 'Custom mobile applications for Android and iOS requirements.',
    useCases: ['Customer-facing apps', 'Booking & ordering apps', 'Internal staff apps'],
    longDescription:
      'For businesses that need a dedicated mobile experience — for customers or for your own team — we build mobile applications suited to your requirement and budget, from simple utility apps to more involved customer-facing products.',
    metaDescription:
      'Custom Android and iOS mobile application development for growing businesses.',
  },
  {
    slug: 'custom-software',
    name: 'Custom Business Software',
    icon: 'software',
    shortDescription: 'Software designed specifically around your workflow.',
    useCases: ['Billing systems', 'Inventory systems', 'Customer management', 'Appointment systems', 'Reporting systems'],
    longDescription:
      'If your business runs on spreadsheets, notebooks or a mix of disconnected tools, custom software can bring billing, inventory, customer records and reporting into one place — built specifically around how your business already works, not the other way around.',
    metaDescription:
      'Custom business software — billing, inventory, appointments and reporting systems built around your workflow.',
  },
  {
    slug: 'business-automation',
    name: 'Business Automation',
    icon: 'automation',
    shortDescription: 'Reduce repetitive manual work through software and automation.',
    useCases: ['Automated reports', 'Notification workflows', 'Data entry reduction', 'Process integration'],
    longDescription:
      'A lot of day-to-day work — re-entering data, chasing follow-ups, compiling reports — can be automated. We look at where your team spends repetitive manual time and design a solution that removes as much of it as practical.',
    metaDescription:
      'Business process automation to cut down repetitive manual work and connect your existing tools.',
  },
  {
    slug: 'ai-solutions',
    name: 'AI-Powered Solutions',
    icon: 'ai',
    shortDescription: 'AI integration where it provides practical business value.',
    useCases: ['AI assistants', 'Document processing', 'Content generation support', 'Intelligent search'],
    longDescription:
      'AI is useful when it solves a real, specific problem — answering common customer questions, helping process documents, or making information easier to search. We integrate AI features where they genuinely save time, and are upfront about where they do not.',
    metaDescription:
      'Practical AI integration for business applications — assistants, document processing and intelligent search.',
  },
  {
    slug: 'maintenance',
    name: 'Website Maintenance & Improvements',
    icon: 'maintenance',
    shortDescription: 'Ongoing support for existing websites and applications.',
    useCases: ['Bug fixes', 'Performance improvements', 'New features', 'UI improvements', 'Security updates', 'Hosting & deployment support'],
    longDescription:
      "Already have a website or application? We can take over maintenance — fixing bugs, improving performance, adding new features, and keeping things running — even if we weren't the ones who originally built it.",
    metaDescription:
      'Website and application maintenance — bug fixes, performance improvements, new features and hosting support.',
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
