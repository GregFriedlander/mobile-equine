import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBadge } from './location-badge';

describe('LocationBadge', () => {
  let component: LocationBadge;
  let fixture: ComponentFixture<LocationBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
