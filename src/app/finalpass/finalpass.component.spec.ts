import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalpassComponent } from './finalpass.component';

describe('FinalpassComponent', () => {
  let component: FinalpassComponent;
  let fixture: ComponentFixture<FinalpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
