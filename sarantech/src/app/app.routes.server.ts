import { RenderMode, ServerRoute } from '@angular/ssr';
import { SERVICES } from './core/config/services-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SERVICES.map((s) => ({ slug: s.slug }));
    },
  },
  {
    path: '404',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
