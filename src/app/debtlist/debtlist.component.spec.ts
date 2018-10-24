import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtlistComponent } from './debtlist.component';

describe('DebtlistComponent', () => {
  let component: DebtlistComponent;
  let fixture: ComponentFixture<DebtlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
