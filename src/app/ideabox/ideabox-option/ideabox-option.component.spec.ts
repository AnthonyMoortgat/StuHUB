import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaboxOptionComponent } from './ideabox-option.component';

describe('IdeaboxOptionComponent', () => {
  let component: IdeaboxOptionComponent;
  let fixture: ComponentFixture<IdeaboxOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaboxOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaboxOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
