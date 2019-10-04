import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhthuongcheckComponent } from './tinhthuongcheck.component';

describe('TinhthuongcheckComponent', () => {
  let component: TinhthuongcheckComponent;
  let fixture: ComponentFixture<TinhthuongcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhthuongcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhthuongcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
