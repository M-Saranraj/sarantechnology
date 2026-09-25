import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { PROJECTS } from '../../core/config/projects-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly projects = PROJECTS;

  ngOnInit(): void {
    this.seo.apply({
      title: 'Projects',
      description: 'A selection of client, professional, personal and academic projects — honestly labelled, no invented clients.',
      path: '/projects',
    });
  }
}
