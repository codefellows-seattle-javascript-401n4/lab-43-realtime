import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer/';
import reporter from '../middleware/reporter';
import thunk from '../middleware/thunk';
import reduxIO from '../middleware/io.middleware.js';

export const store = createStore(reducer, applyMiddleware(reduxIO, thunk,reporter));