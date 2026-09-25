import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { FAQS } from '../../core/config/faq-data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [PageHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class FaqComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly faqs = FAQS;
  readonly openIndex = signal<number | null>(0);

  toggle(i: number): void {
    this.openIndex.set(this.openIndex() === i ? null : i);
  }

  ngOnInit(): void {
    this.seo.apply({
      title: 'Frequently Asked Questions',
      description: 'Answers to common questions about pricing, timelines, custom software, e-commerce, mobile apps and AI integration.',
      path: '/faq',
    });
  }
}
