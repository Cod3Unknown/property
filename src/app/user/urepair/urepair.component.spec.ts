import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrepairComponent } from './urepair.component';

describe('UrepairComponent', () => {
  let component: UrepairComponent;
  let fixture: ComponentFixture<UrepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
