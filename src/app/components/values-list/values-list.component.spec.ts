import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesListComponent } from './values-list.component';

describe('ValuesListComponent', () => {
  let component: ValuesListComponent;
  let fixture: ComponentFixture<ValuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
