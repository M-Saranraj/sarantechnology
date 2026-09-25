import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../../../shared/components/icon/icon';
import { SERVICES } from '../../../../core/config/services-data';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-overview.html',
  styleUrl: './services-overview.scss',
})
export class ServicesOverviewComponent {
  readonly services = SERVICES;
}
