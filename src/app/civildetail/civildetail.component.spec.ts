import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivildetailComponent } from './civildetail.component';

describe('CivildetailComponent', () => {
  let component: CivildetailComponent;
  let fixture: ComponentFixture<CivildetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivildetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivildetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
