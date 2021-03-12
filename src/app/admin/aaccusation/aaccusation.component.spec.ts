import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaccusationComponent } from './aaccusation.component';

describe('AaccusationComponent', () => {
  let component: AaccusationComponent;
  let fixture: ComponentFixture<AaccusationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaccusationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaccusationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
