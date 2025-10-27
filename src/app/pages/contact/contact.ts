import { Component, signal } from '@angular/core';
import { SITE } from '../../data/site.data';
import { ServicesHeroComponent } from '../services/services-hero';

@Component({
  selector: 'med-contact',
  standalone: true,
  imports: [ServicesHeroComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  SITE = SITE;

  contact = signal(SITE.contactInfo);

  buildTelHref() {
    // Strip non-digits for tel: protocol
    const raw = this.contact().phone.replace(/[^\d]/g, '');
    return `tel:${raw}`;
  }

  buildMailtoHref(subject = 'Mobile Equine Diagnostics Inquiry', body = '') {
    const to = this.contact().email;
    const q = new URLSearchParams({
      subject,
      body,
    }).toString();
    return `mailto:${to}?${q}`;
  }
}
