import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPageComponent } from './contacts-page.component';

describe('ContactsPageComponent', () => {
  let component: ContactsPageComponent;
  let fixture: ComponentFixture<ContactsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsPageComponent]
    });
    fixture = TestBed.createComponent(ContactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
