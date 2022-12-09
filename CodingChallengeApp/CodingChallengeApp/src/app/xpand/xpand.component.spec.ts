import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPANDComponent } from './xpand.component';

describe('XPANDComponent', () => {
  let component: XPANDComponent;
  let fixture: ComponentFixture<XPANDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XPANDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XPANDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
