import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmentorComponent } from './asmentor.component';

describe('AsmentorComponent', () => {
  let component: AsmentorComponent;
  let fixture: ComponentFixture<AsmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
