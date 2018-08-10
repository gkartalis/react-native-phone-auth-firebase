import ReduxThunk from 'redux-thunk';
import { 
    createStore, 
    applyMiddleware, 
    compose 
} from 'redux';
import reducer from '../reducers';


let composeEnhancers = compose;
/*  eslint no-undef: 0    */
if (__DEV__) {
    /*  eslint no-underscore-dangle: 0    */
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(ReduxThunk))
);

export {
    store,
};
