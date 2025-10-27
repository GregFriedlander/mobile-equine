import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  menuOpen = signal(false);
  scrolled = signal(false);

  closeMenu() {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    // add shadow after 8px of scroll
    this.scrolled.set(window.scrollY > 8);
  }
}
