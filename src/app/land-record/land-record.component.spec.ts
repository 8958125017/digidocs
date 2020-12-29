import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRecordComponent } from './land-record.component';

describe('LandRecordComponent', () => {
  let component: LandRecordComponent;
  let fixture: ComponentFixture<LandRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
