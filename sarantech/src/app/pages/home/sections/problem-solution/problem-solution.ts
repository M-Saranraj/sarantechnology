import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Pair {
  problem: string;
  solution: string;
}

@Component({
  selector: 'app-problem-solution',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './problem-solution.html',
  styleUrl: './problem-solution.scss',
})
export class ProblemSolutionComponent {
  readonly pairs: Pair[] = [
    { problem: 'I need a website for my business.', solution: 'A fast, mobile-friendly business website that explains what you do.' },
    { problem: 'I want customers to find my services online.', solution: 'SEO-ready pages built around what people actually search for.' },
    { problem: 'I want customers to book appointments online.', solution: 'A booking system built around how your business schedules work.' },
    { problem: 'I want to sell my products online.', solution: 'An online store with a product catalog, cart and order management.' },
    { problem: 'I want to replace manual Excel processes.', solution: 'Custom software for billing, inventory or customer records.' },
    { problem: 'I need a custom application for my business.', solution: 'A web or mobile application built around your exact workflow.' },
    { problem: 'I want to automate repetitive work.', solution: 'Automation that removes manual, repeatable tasks from your day.' },
    { problem: 'I want to add AI to my business.', solution: 'AI features — like search or document processing — where they help.' },
  ];
}
