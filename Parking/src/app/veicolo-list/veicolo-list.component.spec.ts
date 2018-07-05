import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeicoloListComponent } from './veicolo-list.component';

describe('VeicoloListComponent', () => {
  let component: VeicoloListComponent;
  let fixture: ComponentFixture<VeicoloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeicoloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeicoloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
