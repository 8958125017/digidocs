import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilOwnershipDetailComponent } from './civil-ownership-detail.component';

describe('CivilOwnershipDetailComponent', () => {
  let component: CivilOwnershipDetailComponent;
  let fixture: ComponentFixture<CivilOwnershipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilOwnershipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilOwnershipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
