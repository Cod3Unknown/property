import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UindexComponent } from './uindex.component';

describe('UindexComponent', () => {
  let component: UindexComponent;
  let fixture: ComponentFixture<UindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
