import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
    title: 'Mobile Equine Diagnostics — Home',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((m) => m.ServicesComponent),
    title: 'Services | Mobile Equine Diagnostics',
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team').then((m) => m.TeamComponent),
    title: 'Our Team | Mobile Equine Diagnostics',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactComponent),
    title: 'Contact | Mobile Equine Diagnostics',
  },
  { path: '**', redirectTo: '' },
];
