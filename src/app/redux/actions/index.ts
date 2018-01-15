import * as types from '../../constants';
import { INCREMENT, DECREMENT, RESET, SELECTFILTER, DESELECTFILTER } from '../../constants';

const increment = text => {
    return { type: INCREMENT };
};

const decrement = id => {
    return { type: DECREMENT };
};

const selectFiler = filter => {
    return { type: SELECTFILTER };
};


const deSelectFiler = id => {
    return { type: DESELECTFILTER };
};

export {
    increment,
    decrement,
    selectFiler,
    deSelectFiler
};


// import * as types from '../../constants';

// const addTodo = text => {
//     return { type: types.ADD_TODO, text };
// };

// const deleteTodo = id => {
//     return { type: types.DELETE_TODO, id };
// };

// export {
//     addTodo,
//     deleteTodo
// };
