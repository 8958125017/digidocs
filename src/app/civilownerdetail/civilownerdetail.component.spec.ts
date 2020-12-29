import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilownerdetailComponent } from './civilownerdetail.component';

describe('CivilownerdetailComponent', () => {
  let component: CivilownerdetailComponent;
  let fixture: ComponentFixture<CivilownerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilownerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilownerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
