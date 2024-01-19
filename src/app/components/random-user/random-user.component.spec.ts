import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserComponent } from './random-user.component';

describe('RandomUserComponent', () => {
  let component: RandomUserComponent;
  let fixture: ComponentFixture<RandomUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomUserComponent]
    });
    fixture = TestBed.createComponent(RandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
