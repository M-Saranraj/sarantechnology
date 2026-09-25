import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { ContactSectionComponent } from '../../shared/components/contact-section/contact-section';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageHeaderComponent, ContactSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.apply({
      title: 'Contact',
      description: 'Get in touch with SaranTech on WhatsApp, phone, email, or the enquiry form to discuss your project.',
      path: '/contact',
    });
  }
}
