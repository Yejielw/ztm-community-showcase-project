import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperNavigationComponent } from './upper-navigation.component';

describe('UpperNavigationComponent', () => {
  let component: UpperNavigationComponent;
  let fixture: ComponentFixture<UpperNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
