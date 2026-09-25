import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Step { num: string; title: string; description: string; }

@Component({
  selector: 'app-process',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class ProcessComponent {
  readonly steps: Step[] = [
    { num: '01', title: 'Understand', description: 'Understand your business and what you actually need.' },
    { num: '02', title: 'Plan', description: 'Define features, scope and the right solution approach.' },
    { num: '03', title: 'Design', description: 'Create the user experience and interface.' },
    { num: '04', title: 'Develop', description: 'Build the website, application or software.' },
    { num: '05', title: 'Test', description: 'Test functionality, responsiveness and reliability.' },
    { num: '06', title: 'Launch', description: 'Deploy the solution and provide support.' },
  ];
}
