import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from '../../constants';
import { AppState } from '../../redux/reducers';

@Component({
  selector: 'app-counter-redux',
  templateUrl: './counter-redux.component.html',
  styleUrls: ['./counter-redux.component.css']
})
export class CounterReduxComponent {
  count: number;
  limit: Array<number>;

  constructor(private store: Store<AppState>, private currState: AppState) {
     store.select('counter').subscribe(state => this.currState.counter = state);
  }

  increment () {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement () {
    this.store.dispatch({ type: DECREMENT });
  }
}
