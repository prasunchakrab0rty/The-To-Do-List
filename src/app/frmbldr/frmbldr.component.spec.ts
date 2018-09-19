import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmbldrComponent } from './frmbldr.component';

describe('FrmbldrComponent', () => {
  let component: FrmbldrComponent;
  let fixture: ComponentFixture<FrmbldrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmbldrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmbldrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
