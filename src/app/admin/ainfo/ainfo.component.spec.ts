import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AinfoComponent } from './ainfo.component';

describe('AinfoComponent', () => {
  let component: AinfoComponent;
  let fixture: ComponentFixture<AinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
