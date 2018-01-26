import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer/';
import reporter from '../middleware/reporter'
import thunk from '../middleware/thunk'
import reduxIO from '../components/chat/io.middleware'

// TODO: Pull in reduxIO middleware and add before thunk
// TODO: export a created store, not the createStore method.  With this pattern, we can reference store
    // export const store = createStore...
export const store = createStore(reducer, applyMiddleware(reduxIO, thunk, reporter))

