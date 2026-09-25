import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { IconComponent } from '../../shared/components/icon/icon';
import { getServiceBySlug, SERVICES, ServiceItem } from '../../core/config/services-data';
import { whatsappLink } from '../../core/config/site-config';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss',
})
export class ServiceDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  service!: ServiceItem;
  otherServices: ServiceItem[] = [];
  whatsappUrl = '';

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    const found = getServiceBySlug(slug);

    if (!found) {
      this.router.navigateByUrl('/services');
      return;
    }

    this.service = found;
    this.otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
    this.whatsappUrl = whatsappLink(`Hi SaranTech, I'd like to discuss ${found.name}.`);

    this.seo.apply({
      title: found.name,
      description: found.metaDescription,
      path: `/services/${found.slug}`,
    });
  }
}
