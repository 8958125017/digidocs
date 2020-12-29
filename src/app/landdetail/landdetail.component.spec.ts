import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanddetailComponent } from './landdetail.component';

describe('LanddetailComponent', () => {
  let component: LanddetailComponent;
  let fixture: ComponentFixture<LanddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
