import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { IconComponent } from '../../shared/components/icon/icon';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { SERVICES } from '../../core/config/services-data';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [RouterLink, IconComponent, PageHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-list.html',
  styleUrl: './services-list.scss',
})
export class ServicesListComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly services = SERVICES;

  ngOnInit(): void {
    this.seo.apply({
      title: 'Services',
      description: 'Business websites, web applications, e-commerce, mobile apps, custom software, automation and AI solutions — built for growing businesses.',
      path: '/services',
    });
  }
}
