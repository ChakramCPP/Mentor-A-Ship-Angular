import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtasksComponent } from './mtasks.component';

describe('MtasksComponent', () => {
  let component: MtasksComponent;
  let fixture: ComponentFixture<MtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
