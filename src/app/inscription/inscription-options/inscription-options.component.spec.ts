import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionOptionsComponent } from './inscription-options.component';

describe('InscriptionOptionsComponent', () => {
  let component: InscriptionOptionsComponent;
  let fixture: ComponentFixture<InscriptionOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
