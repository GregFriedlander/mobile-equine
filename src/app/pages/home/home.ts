import { Component, DOCUMENT, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SITE } from '../../data/site.data';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroComponent, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  SITE = SITE;

  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  ngOnInit() {
    // Per-page title + description
    this.title.setTitle(`${SITE.brand.name} — Agua Dulce, CA`);
    this.meta.updateTag({
      name: 'description',
      content:
        'On-site imaging, lameness diagnostics, and ambulatory equine care across Agua Dulce and the SCV—minimally invasive, low-stress veterinary care.',
    });

    // JSON-LD (LocalBusiness) — SSR-safe: add a single script tag to <head>
    const id = 'ld-localbusiness';
    if (!this.doc.getElementById(id)) {
      const script = this.doc.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: SITE.brand.name,
        description: 'Mobile equine diagnostics and ambulatory care.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Agua Dulce',
          addressRegion: 'CA',
          addressCountry: 'US',
        },
        areaServed: SITE.areasServed,
        image: SITE.brand.logoUrl,
        url: 'https://mobileequinedx.com',
        telephone: SITE.contact?.phone ?? undefined,
      });
      this.doc.head.appendChild(script);
    }
  }
}
