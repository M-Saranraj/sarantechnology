import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../../../../shared/components/icon/icon';

interface Reason { title: string; description: string; }

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUsComponent {
  readonly reasons: Reason[] = [
    { title: 'Direct communication', description: 'You talk directly with the person building your solution — no account managers in between.' },
    { title: 'Customized solutions', description: 'Nothing is a one-size-fits-all template dressed up to look custom.' },
    { title: 'Modern technology', description: 'Built with current, well-supported tools rather than outdated stacks.' },
    { title: 'Mobile-first design', description: 'Designed for how your customers actually browse — on their phones.' },
    { title: 'Transparent process', description: 'You know what is being built, when, and why, at every stage.' },
    { title: 'Post-launch support', description: 'Help does not stop the day your project goes live.' },
  ];
}
