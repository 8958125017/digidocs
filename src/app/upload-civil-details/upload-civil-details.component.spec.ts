import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCivilDetailsComponent } from './upload-civil-details.component';

describe('UploadCivilDetailsComponent', () => {
  let component: UploadCivilDetailsComponent;
  let fixture: ComponentFixture<UploadCivilDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCivilDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCivilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
