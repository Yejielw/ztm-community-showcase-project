import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowcaseComponent } from './add-showcase.component';

describe('AddShowcaseComponent', () => {
  let component: AddShowcaseComponent;
  let fixture: ComponentFixture<AddShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
