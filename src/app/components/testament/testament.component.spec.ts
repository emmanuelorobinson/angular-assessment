import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamentComponent } from './testament.component';

describe('TestamentComponent', () => {
  let component: TestamentComponent;
  let fixture: ComponentFixture<TestamentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestamentComponent]
    });
    fixture = TestBed.createComponent(TestamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
