import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomContactPageComponent } from './random-contact-page.component';

describe('RandomContactPageComponent', () => {
  let component: RandomContactPageComponent;
  let fixture: ComponentFixture<RandomContactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomContactPageComponent]
    });
    fixture = TestBed.createComponent(RandomContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
