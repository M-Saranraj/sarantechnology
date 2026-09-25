import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQS } from '../../../../core/config/faq-data';

@Component({
  selector: 'app-faq-teaser',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq-teaser.html',
  styleUrl: './faq-teaser.scss',
})
export class FaqTeaserComponent {
  readonly faqs = FAQS.slice(0, 4);
  readonly openIndex = signal<number | null>(0);

  toggle(i: number): void {
    this.openIndex.set(this.openIndex() === i ? null : i);
  }
}
