import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShowcaseComponent } from './edit-showcase.component';

describe('EditShowcaseComponent', () => {
  let component: EditShowcaseComponent;
  let fixture: ComponentFixture<EditShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
