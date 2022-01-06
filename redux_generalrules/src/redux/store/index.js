
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


// const store = createStore(rootReducer);

//yayınlanma zamanında build edildiğinde kullanılacak yer development oldugundan bu yazılır

let store;

if (process.env.NODE_ENV === 'development') {
    // store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && w indow.__REDUX_DEVTOOLS_EXTENSION__());
    store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
} else {
    // store = createStore(rootReducer);
    store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;