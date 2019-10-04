import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhthuongComponent } from './tinhthuong.component';

describe('TinhthuongComponent', () => {
  let component: TinhthuongComponent;
  let fixture: ComponentFixture<TinhthuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhthuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhthuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
