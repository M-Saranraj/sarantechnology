import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon';

interface BuildOption {
  label: string;
  icon: IconName;
  explanation: string;
  serviceSlug?: string;
}

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './builder.html',
  styleUrl: './builder.scss',
})
export class BuilderComponent {
  readonly options: BuildOption[] = [
    { label: 'A Website', icon: 'website', explanation: 'A modern, mobile-friendly business website that explains what you do and how to reach you.', serviceSlug: 'business-websites' },
    { label: 'An E-Commerce Store', icon: 'ecommerce', explanation: 'An online store with a product catalog, shopping cart and order management.', serviceSlug: 'ecommerce' },
    { label: 'A Web Application', icon: 'webapp', explanation: 'A custom system — booking, admin or customer management — built around your process.', serviceSlug: 'web-applications' },
    { label: 'A Mobile App', icon: 'mobile', explanation: 'A dedicated Android or iOS app for your customers or your team.', serviceSlug: 'mobile-applications' },
    { label: 'Business Software', icon: 'software', explanation: 'Software for billing, inventory, appointments or reporting, built around your workflow.', serviceSlug: 'custom-software' },
    { label: 'Automation', icon: 'automation', explanation: 'Removing repetitive manual work by connecting and automating your existing tools.', serviceSlug: 'business-automation' },
    { label: 'AI Solution', icon: 'ai', explanation: 'AI features — like intelligent search or document processing — where they add real value.', serviceSlug: 'ai-solutions' },
    { label: 'Something Else', icon: 'maintenance', explanation: "Not sure which category fits? Tell us the problem and we'll help you figure out the solution." },
  ];

  readonly selected = signal<BuildOption>(this.options[0]);

  select(option: BuildOption): void {
    this.selected.set(option);
  }
}
