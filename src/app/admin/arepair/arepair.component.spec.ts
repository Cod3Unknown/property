import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArepairComponent } from './arepair.component';

describe('ArepairComponent', () => {
  let component: ArepairComponent;
  let fixture: ComponentFixture<ArepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
