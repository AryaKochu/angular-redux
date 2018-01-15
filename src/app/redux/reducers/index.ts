import { Action, combineReducers } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET, SELECTFILTER, DESELECTFILTER } from '../../constants';

export interface AppState {
    filterText: string;
    limit: number;
    counter: number;
  }

export interface AppStates {
    states: Array<AppState>;
 }

const INITIAL_STATE = [{filterText: 'default', limit: 0, counter: 0}];

const counterReducer = (state: AppStates = {states: INITIAL_STATE}, action: Action) => {
   switch (action.type) {
    case INCREMENT:
        return state.states[state.states.length - 1].counter + 1;
    case DECREMENT:
        return state.states[state.states.length - 1].counter - 1;
    case RESET:
        return 0;
    default:
        return state.states[state.states.length - 1].counter;
   }
};

const filterReducer = (state: AppStates = {states: INITIAL_STATE}, action: Action) => {
    switch (action.type) {
        case SELECTFILTER:
            return  [
                {
                    filterText: 'abc',
                    limit: state.states[state.states.length - 1].limit + 1
                },
                    ...state.states
            ];
        }
    };

export default combineReducers({
    counter: counterReducer,
    filter: filterReducer
});
