import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'website' | 'webapp' | 'ecommerce' | 'mobile' | 'software' | 'automation'
  | 'ai' | 'maintenance' | 'whatsapp' | 'phone' | 'mail' | 'arrow-right'
  | 'check' | 'menu' | 'close' | 'pin';

const PATHS: Record<IconName, string> = {
  website: 'M3 5.5h18M3 5.5v13a1 1 0 001 1h16a1 1 0 001-1v-13M3 5.5a1 1 0 011-1h16a1 1 0 011 1M7 9h10M7 12.5h6',
  webapp: 'M4 4h16v11H4zM9 19h6M12 15v4M8 8h3v3H8z',
  ecommerce: 'M4 6h2l1.2 9.6a1.5 1.5 0 001.5 1.4H18a1.5 1.5 0 001.46-1.15L21 9H6.2M9.5 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z',
  mobile: 'M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18.2h2',
  software: 'M8 3H6a2 2 0 00-2 2v14a2 2 0 002 2h2M16 3h2a2 2 0 012 2v14a2 2 0 01-2 2h-2M9 8l-2.5 4L9 16M15 8l2.5 4L15 16',
  automation: 'M12 5V2.5M12 21.5V19M19 12h2.5M2.5 12H5M17 7l1.5-1.5M5.5 18.5L7 17M17 17l1.5 1.5M5.5 5.5L7 7M12 8a4 4 0 100 8 4 4 0 000-8z',
  ai: 'M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8a4 4 0 100 8 4 4 0 000-8z',
  maintenance:
    'M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2-2 2.6-2.6z',
  whatsapp:
    'M6.5 17.5L4 20l2.6-.7A8 8 0 1020 12a8 8 0 00-13.5 5.5zM9 9.6c0 3 2.4 5.6 5.6 5.6.5 0 .9-.4.9-1v-.7c0-.3-.2-.5-.4-.6l-1.5-.6c-.2-.1-.5 0-.6.2l-.3.4a5 5 0 01-2.3-2.3l.4-.3c.2-.1.3-.4.2-.6l-.6-1.5c-.1-.2-.3-.4-.6-.4H9c-.6 0-1 .4-1 .9z',
  phone: 'M6 3h3l1.5 4.5-2 1.5a11 11 0 005 5l1.5-2L19.5 15v3a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 014.5 4.6 1.5 1.5 0 016 3z',
  mail: 'M3.5 5.5h17a1 1 0 011 1v11a1 1 0 01-1 1h-17a1 1 0 01-1-1v-11a1 1 0 011-1zM3 6.5l9 6.5 9-6.5',
  'arrow-right': 'M4 12h15M13 6l6 6-6 6',
  check: 'M4 12.5l5 5 11-11',
  menu: 'M4 6.5h16M4 12h16M4 17.5h16',
  close: 'M5 5l14 14M19 5L5 19',
  pin: 'M12 21s-6.5-6-6.5-11A6.5 6.5 0 1118.5 10c0 5-6.5 11-6.5 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
};

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.viewBox]="'0 0 24 24'"
      [attr.width]="size()"
      [attr.height]="size()"
      fill="none"
      [attr.stroke]="'currentColor'"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path [attr.d]="path()" />
    </svg>
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input<number>(24);

  path(): string {
    return PATHS[this.name()];
  }
}
