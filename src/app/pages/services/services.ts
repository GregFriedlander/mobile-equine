import { Component, computed, signal } from '@angular/core';
import { ServicesHeroComponent } from './services-hero';
import { SITE } from '../../data/site.data';

@Component({
  selector: 'med-services',
  standalone: true,
  imports: [ServicesHeroComponent],
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
})
export class ServicesComponent {
  SITE = SITE;

  // raw signals
  servicesRaw = signal(SITE.servicesPage.services);
  affiliatesRaw = signal(SITE.servicesPage.affiliates);

  // normalize & sort A→Z
  services = computed(() => [...this.servicesRaw()].sort((a, b) => a.localeCompare(b)));

  // Title-case + sort A→Z for affiliates
  private toTitleCase = (s: string) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

  affiliates = computed(() =>
    [...this.affiliatesRaw()]
      .map((name) => this.toTitleCase(name))
      .sort((a, b) => a.localeCompare(b))
  );
}
