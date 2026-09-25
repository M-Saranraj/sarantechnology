import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { HeroComponent } from './sections/hero/hero';
import { ProblemSolutionComponent } from './sections/problem-solution/problem-solution';
import { ServicesOverviewComponent } from './sections/services-overview/services-overview';
import { SolutionsComponent } from './sections/solutions/solutions';
import { WhyUsComponent } from './sections/why-us/why-us';
import { ProcessComponent } from './sections/process/process';
import { BuilderComponent } from './sections/builder/builder';
import { PortfolioTeaserComponent } from './sections/portfolio-teaser/portfolio-teaser';
import { PricingCtaComponent } from './sections/pricing-cta/pricing-cta';
import { FaqTeaserComponent } from './sections/faq-teaser/faq-teaser';
import { ContactSectionComponent } from '../../shared/components/contact-section/contact-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProblemSolutionComponent,
    ServicesOverviewComponent,
    SolutionsComponent,
    WhyUsComponent,
    ProcessComponent,
    BuilderComponent,
    PortfolioTeaserComponent,
    PricingCtaComponent,
    FaqTeaserComponent,
    ContactSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.apply({
      title: 'Digital Solutions for Growing Businesses',
      description:
        'SaranTech designs and builds affordable websites, web applications, mobile apps and custom software for small businesses, startups and service providers in Chennai and beyond.',
      path: '/',
    });
  }
}
