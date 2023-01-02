import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueDetailsComponent } from './value-details.component';

describe('ValueDetailsComponent', () => {
  let component: ValueDetailsComponent;
  let fixture: ComponentFixture<ValueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
