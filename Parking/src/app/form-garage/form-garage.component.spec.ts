import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGarageComponent } from './form-garage.component';

describe('FormGarageComponent', () => {
  let component: FormGarageComponent;
  let fixture: ComponentFixture<FormGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
