import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdprofileComponent } from './adprofile.component';

describe('AdprofileComponent', () => {
  let component: AdprofileComponent;
  let fixture: ComponentFixture<AdprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
