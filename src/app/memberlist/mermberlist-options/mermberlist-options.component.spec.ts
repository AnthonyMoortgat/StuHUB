import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { MemberlistOptionComponent } from './memberlist-option.component';

describe('MemberlistOptionService', () => {
  let component: MemberlistOptionComponent;
  let fixture: ComponentFixture<MemberlistOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberlistOptionComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberlistOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
