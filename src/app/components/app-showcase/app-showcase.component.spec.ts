import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowcaseComponent } from './app-showcase.component';

describe('AppShowcaseComponent', () => {
  let component: AppShowcaseComponent;
  let fixture: ComponentFixture<AppShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppShowcaseComponent]
    });
    fixture = TestBed.createComponent(AppShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
