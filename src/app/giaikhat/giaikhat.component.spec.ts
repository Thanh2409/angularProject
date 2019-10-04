import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaikhatComponent } from './giaikhat.component';

describe('GiaikhatComponent', () => {
  let component: GiaikhatComponent;
  let fixture: ComponentFixture<GiaikhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaikhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaikhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
