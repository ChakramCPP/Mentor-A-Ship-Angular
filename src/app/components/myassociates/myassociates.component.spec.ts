import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyassociatesComponent } from './myassociates.component';

describe('MyassociatesComponent', () => {
  let component: MyassociatesComponent;
  let fixture: ComponentFixture<MyassociatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyassociatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyassociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
