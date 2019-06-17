import {
    createStore
} from 'redux';

import reducer from '../reducers/index';
import applyMiddleware from '../middleware/index';

export default store = createStore(
    reducer,
    applyMiddleware
);