import { Component } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}


// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import * as Actions from './redux/actions';

// interface State {
//   id: number;
//   completed: boolean;
//   text: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {

//   constructor(private store: Store<State>) {}

//   title = 'app';

//   clicked () {
//     this.store.dispatch({ type: Actions.addTodo });
//     console.log('clicked');
//   }
// }
