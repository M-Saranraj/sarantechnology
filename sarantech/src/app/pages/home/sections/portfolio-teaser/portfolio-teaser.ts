import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../../../core/config/projects-data';

@Component({
  selector: 'app-portfolio-teaser',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-teaser.html',
  styleUrl: './portfolio-teaser.scss',
})
export class PortfolioTeaserComponent {
  readonly projects = PROJECTS.slice(0, 3);
}
