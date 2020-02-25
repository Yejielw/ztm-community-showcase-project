import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableButtonComponent } from './expandable-button.component';

describe('ExpandableButtonComponent', () => {
  let component: ExpandableButtonComponent;
  let fixture: ComponentFixture<ExpandableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
