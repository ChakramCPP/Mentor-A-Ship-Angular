import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MprofileComponent } from './mprofile.component';

describe('MprofileComponent', () => {
  let component: MprofileComponent;
  let fixture: ComponentFixture<MprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
