import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberlistOptionsComponent } from './memberlist-options.component';

describe('MemberlistOptionsComponent', () => {
  let component: MemberlistOptionsComponent;
  let fixture: ComponentFixture<MemberlistOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberlistOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberlistOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
