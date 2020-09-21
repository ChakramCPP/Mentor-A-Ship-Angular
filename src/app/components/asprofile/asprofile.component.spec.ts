import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsprofileComponent } from './asprofile.component';

describe('AsprofileComponent', () => {
  let component: AsprofileComponent;
  let fixture: ComponentFixture<AsprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
