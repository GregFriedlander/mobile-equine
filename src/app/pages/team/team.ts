import { Component, signal } from '@angular/core';
import { SITE } from '../../data/site.data';
import { ServicesHeroComponent } from '../services/services-hero';

@Component({
  selector: 'med-team',
  standalone: true,
  imports: [ServicesHeroComponent],
  templateUrl: './team.html',
  styleUrls: ['./team.scss'],
})
export class TeamComponent {
  SITE = SITE;
  jackie = signal(SITE.teamPage.jackie);
  martin = signal(SITE.teamPage.martin);
}
