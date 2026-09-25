import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IconComponent } from '../icon/icon';
import { NotifyService } from '../../../core/services/notify.service';
import { SITE_CONFIG, mailtoLink, telLink, whatsappLink } from '../../../core/config/site-config';
import { SERVICES } from '../../../core/config/services-data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSectionComponent {
  readonly config = SITE_CONFIG;
  readonly services = SERVICES;
  readonly whatsappUrl = whatsappLink();
  readonly mailUrl = mailtoLink('Project enquiry');
  readonly telUrl = telLink();

  readonly submitted = signal(false);
  readonly links = signal<{ wa: string; sms: string; mail: string } | null>(null);

  private readonly fb = new FormBuilder();
  private readonly notify = new NotifyService();

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    businessName: [''],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    location: [''],
    serviceNeeded: ['', Validators.required],
    budget: [''],
    description: ['', Validators.required],
  });

  prepareMessage(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const d = this.form.getRawValue();
    this.links.set({
      wa: this.notify.whatsappUrl(d),
      sms: this.notify.smsUrl(d),
      mail: this.notify.mailUrl(d),
    });
    this.submitted.set(true);
  }

  editAgain(): void {
    this.submitted.set(false);
  }
}
