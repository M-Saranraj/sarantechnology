import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_CONFIG } from '../config/site-config';

export interface PageSeo {
  title: string;           // page title, WITHOUT the site name suffix
  description: string;
  path: string;             // route path, e.g. '/services/business-websites'
  image?: string;           // absolute or root-relative OG image path
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  apply(page: PageSeo): void {
    const fullTitle = `${page.title} | ${SITE_CONFIG.businessName}`;
    const canonical = `${SITE_CONFIG.siteUrl}${page.path}`;
    const image = page.image ?? `${SITE_CONFIG.siteUrl}/social-preview.png`;

    this.title.setTitle(fullTitle);

    this.setTag('name', 'description', page.description);
    this.setTag('property', 'og:type', 'website');
    this.setTag('property', 'og:site_name', SITE_CONFIG.businessName);
    this.setTag('property', 'og:title', fullTitle);
    this.setTag('property', 'og:description', page.description);
    this.setTag('property', 'og:url', canonical);
    this.setTag('property', 'og:image', image);
    this.setTag('name', 'twitter:card', 'summary_large_image');
    this.setTag('name', 'twitter:title', fullTitle);
    this.setTag('name', 'twitter:description', page.description);
    this.setTag('name', 'twitter:image', image);

    this.setCanonical(canonical);
  }

  private setTag(attr: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attr]: key, content } as { [k: string]: string });
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
