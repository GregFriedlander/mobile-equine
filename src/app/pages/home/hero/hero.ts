import { Component, input } from '@angular/core';

@Component({
  selector: 'med-hero',
  standalone: true,
  template: `
    <section class="relative">
      <!-- Background image (LCP) -->
      <img
        [src]="src()"
        [srcset]="srcset() || null"
        [sizes]="sizes() || '(max-width: 768px) 100vw, 1200px'"
        [alt]="alt()"
        fetchpriority="high"
        decoding="async"
        class="h-[40vh] md:h-[56vh] w-full object-cover object-center"
      />

      <!-- Subtle dark gradient for overall legibility -->
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"
      ></div>

      <!-- Content layer -->
      <div class="absolute inset-0">
        <div
          class="mx-auto max-w-6xl h-full px-4 pt-8 flex
                    justify-center
                    items-start"
        >
          <!-- Translucent card -->
          <div
            class="mb-8 md:mb-0 inline-block bg-white/85 backdrop-blur-sm rounded-2xl shadow-md
                      px-5 py-4 md:px-8 md:py-6
                      text-center md:text-left"
          >
            <!-- Logo mark (scales up on larger screens) -->
            <img
              [src]="logo()"
              alt="Mobile Equine Diagnostics logo"
              class="mx-auto mb-3 h-12 md:h-16 lg:h-20 w-auto transition-[height]"
            />

            <!-- Accessible H1 (visible text title) -->
            <h1
              class="font-serif font-semibold tracking-tight text-2xl md:text-4xl lg:text-5xl text-black"
            >
              {{ title() }}
            </h1>

            <!-- Subtitle -->
            @if (subtitle(); as s) {
            <p
              class="mt-2 text-black/80 text-base md:text-lg lg:text-xl max-w-xl mx-auto text-center"
            >
              {{ s }}
            </p>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  src = input('/assets/hero-panorama.jpg');
  srcset = input<string | undefined>();
  sizes = input<string | undefined>();
  alt = input('Ranch panorama in Agua Dulce, CA');

  // Card content
  title = input('Mobile Equine Diagnostics');
  subtitle = input<string | undefined>(
    'Compassionate, on-site care for performance and companion horses.'
  );

  // PNG with the horse mark (or full lockup if you prefer)
  logo = input('/assets/logo-only.png');
}
