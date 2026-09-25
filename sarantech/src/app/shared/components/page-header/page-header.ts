import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-header">
      <div class="container">
        <p class="kicker">{{ kicker() }}</p>
        <h1>{{ title() }}</h1>
        @if (subtitle()) {
          <p class="subtitle">{{ subtitle() }}</p>
        }
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      padding-block: clamp(2.5rem, 6vw, 4rem) clamp(2rem, 4vw, 3rem);
      border-bottom: 1px solid var(--line);
    }
    h1 { max-width: 20ch; }
    .subtitle {
      font-size: 1.05rem;
      max-width: 56ch;
      margin-top: 0.5rem;
    }
  `],
})
export class PageHeaderComponent {
  readonly kicker = input('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
