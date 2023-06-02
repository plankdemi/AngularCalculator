import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCalcDisplayComponent } from './basic-calc-display.component';

describe('BasicCalcDisplayComponent', () => {
  let component: BasicCalcDisplayComponent;
  let fixture: ComponentFixture<BasicCalcDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicCalcDisplayComponent]
    });
    fixture = TestBed.createComponent(BasicCalcDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
