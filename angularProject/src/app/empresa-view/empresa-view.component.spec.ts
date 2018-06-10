import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaViewComponent } from './empresa-view.component';

describe('EmpresaViewComponent', () => {
  let component: EmpresaViewComponent;
  let fixture: ComponentFixture<EmpresaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
