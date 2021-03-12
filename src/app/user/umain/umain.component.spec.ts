import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmainComponent } from './umain.component';

describe('UmainComponent', () => {
  let component: UmainComponent;
  let fixture: ComponentFixture<UmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
