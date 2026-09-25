import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon';
import { SITE_CONFIG, mailtoLink, whatsappLink } from '../../../core/config/site-config';
import { SERVICES } from '../../../core/config/services-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  readonly config = SITE_CONFIG;
  readonly services = SERVICES.slice(0, 6);
  readonly year = new Date().getFullYear();
  readonly whatsappUrl = whatsappLink();
  readonly mailUrl = mailtoLink('Project enquiry');
}
