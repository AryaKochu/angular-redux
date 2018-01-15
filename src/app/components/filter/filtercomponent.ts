import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SELECTFILTER, DESELECTFILTER } from '../../constants';
import { AppState } from '../../redux/reducers';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {

  filterArray: Array<{}> = [
    { id: 1, category: 'Movies'},
    { id: 2, category: 'Home & Electronics'},
    { id: 3, category: 'Shopping'},
    { id: 4, category: 'Holidays'},
    { id: 5, category: 'Everyday Essentials'},
    { id: 6, category: 'Foos & Wines'},
  ];

  constructor(private store: Store<AppState>, private currState: AppState) {
    store.select('filterText').subscribe(state => this.currState.filterText = state);
    store.select('limit').subscribe(state => this.currState.limit = state);
  }

  clicked(selectedFilter: {id, category}) {
    this.store.dispatch({type: SELECTFILTER});
  }
}
