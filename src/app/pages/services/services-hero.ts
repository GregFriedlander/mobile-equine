import { Component, input } from '@angular/core';

@Component({
  selector: 'med-services-hero',
  standalone: true,
  template: `
    <section class="services-hero">
      <img
        [src]="src()"
        [srcset]="srcset() || null"
        [sizes]="sizes() || '(max-width: 768px) 100vw, 1200px'"
        [alt]="alt()"
        fetchpriority="high"
        decoding="async"
        class="services-hero__img"
      />
      <div class="services-hero__overlay"></div>
      <div class="services-hero__content">
        <h1 class="services-hero__title">{{ title() }}</h1>
        @if (subtitle()) {
        <p class="services-hero__subtitle">{{ subtitle() }}</p>
        }
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .services-hero {
        position: relative;
      }
      .services-hero__img {
        width: 100%;
        height: 28vh;
        object-fit: cover;
        object-position: center;
      }
      @media (min-width: 900px) {
        .services-hero__img {
          height: 40vh;
        }
      }
      .services-hero__overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.25));
        pointer-events: none;
      }
      .services-hero__content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 2rem 1rem 1.25rem 1rem;
        max-width: 78rem;
        margin: 0 auto;
        color: #fff;
        text-align: left;
      }
      .services-hero__title {
        font-family: var(--tw-font-serif, ui-serif, Georgia, serif);
        font-weight: 700;
        line-height: 1.1;
        font-size: clamp(1.5rem, 3vw + 1rem, 2.5rem);
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        margin: 0;
      }
      .services-hero__subtitle {
        margin: 0.25rem 0 0 0;
        font-size: clamp(0.95rem, 1vw + 0.8rem, 1.15rem);
        opacity: 0.95;
        text-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
        max-width: 60ch;
      }
    `,
  ],
})
export class ServicesHeroComponent {
  src = input('/assets/services-hero.jpg');
  srcset = input<string | undefined>();
  sizes = input<string | undefined>();
  alt = input('Services hero image');
  title = input('Services');
  subtitle = input<string | undefined>();
}
