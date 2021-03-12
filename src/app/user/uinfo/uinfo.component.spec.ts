import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UinfoComponent } from './uinfo.component';

describe('UinfoComponent', () => {
  let component: UinfoComponent;
  let fixture: ComponentFixture<UinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
