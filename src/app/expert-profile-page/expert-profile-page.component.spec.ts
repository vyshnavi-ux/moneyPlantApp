import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertProfilePageComponent } from './expert-profile-page.component';

describe('ExpertProfilePageComponent', () => {
  let component: ExpertProfilePageComponent;
  let fixture: ComponentFixture<ExpertProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
