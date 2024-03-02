import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingPageComponent } from './shopping-page.component';

describe('ShoppingPageComponent', () => {
  let component: ShoppingPageComponent;
  let fixture: ComponentFixture<ShoppingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingPageComponent]
    });
    fixture = TestBed.createComponent(ShoppingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
