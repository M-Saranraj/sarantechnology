import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SolutionGroup {
  name: string;
  description: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss',
})
export class SolutionsComponent {
  readonly groups: SolutionGroup[] = [
    { name: 'Retail', description: 'Inventory, billing, customer management and online ordering.' },
    { name: 'Restaurants', description: 'Menu websites, ordering systems and booking solutions.' },
    { name: 'Service Businesses', description: 'Booking, enquiries, customer management and service websites.' },
    { name: 'Startups', description: 'Landing pages, MVPs, web applications and mobile applications.' },
    { name: 'Professional Services', description: 'Appointment systems, customer portals and business websites.' },
    { name: 'Growing Businesses', description: 'Custom software, automation, dashboards and integrations.' },
  ];
}
