import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterReduxComponent } from './counter-redux.component';

describe('CounterReduxComponent', () => {
  let component: CounterReduxComponent;
  let fixture: ComponentFixture<CounterReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
