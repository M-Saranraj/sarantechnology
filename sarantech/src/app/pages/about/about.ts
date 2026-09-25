import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { SITE_CONFIG } from '../../core/config/site-config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly config = SITE_CONFIG;

  readonly stack = [
    'Angular', 'Java', 'Spring Boot', 'MongoDB', 'Oracle Database', 'Kafka', 'Docker', 'AI / software integration',
  ];

  ngOnInit(): void {
    this.seo.apply({
      title: 'About',
      description: 'SaranTech is run by Saranraj M, a Chennai-based software developer building websites, web applications and custom software for growing businesses.',
      path: '/about',
    });
  }
}
