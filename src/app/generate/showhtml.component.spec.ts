import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhtmlComponent } from './showhtml.component';

describe('ShowhtmlComponent', () => {
  let component: ShowhtmlComponent;
  let fixture: ComponentFixture<ShowhtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowhtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
