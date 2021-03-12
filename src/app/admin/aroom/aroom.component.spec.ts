import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AroomComponent } from './aroom.component';

describe('AroomComponent', () => {
  let component: AroomComponent;
  let fixture: ComponentFixture<AroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
