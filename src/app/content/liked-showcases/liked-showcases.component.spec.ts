import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedShowcasesComponent } from './liked-showcases.component';

describe('LikedShowcasesComponent', () => {
  let component: LikedShowcasesComponent;
  let fixture: ComponentFixture<LikedShowcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedShowcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedShowcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
