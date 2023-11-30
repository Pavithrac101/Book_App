import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercomponentsComponent } from './ordercomponents.component';

describe('OrdercomponentsComponent', () => {
  let component: OrdercomponentsComponent;
  let fixture: ComponentFixture<OrdercomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdercomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
