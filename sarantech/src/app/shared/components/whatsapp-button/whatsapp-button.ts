import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';
import { whatsappLink } from '../../../core/config/site-config';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="whatsapp-fab"
      [href]="href"
      target="_blank"
      rel="noopener"
      aria-label="Chat with SaranTech on WhatsApp"
    >
      <app-icon name="whatsapp" [size]="26" />
    </a>
  `,
  styles: [`
    .whatsapp-fab {
      position: fixed;
      right: 1.25rem;
      bottom: 1.25rem;
      z-index: 50;
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--signal-green, #3f7a5c);
      color: #fff;
      box-shadow: 0 8px 24px rgba(16, 20, 37, 0.28);
      transition: transform 0.15s ease;
    }
    .whatsapp-fab:hover { transform: translateY(-2px) scale(1.03); }
    @media (max-width: 640px) {
      .whatsapp-fab { width: 50px; height: 50px; right: 1rem; bottom: 1rem; }
    }
  `],
})
export class WhatsappButtonComponent {
  readonly href = whatsappLink();
}
