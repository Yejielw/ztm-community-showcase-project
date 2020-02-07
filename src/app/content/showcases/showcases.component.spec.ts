import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasesComponent } from './showcases.component';

describe('ShowcasesComponent', () => {
  let component: ShowcasesComponent;
  let fixture: ComponentFixture<ShowcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
