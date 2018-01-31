import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer/';
import reporter from '../middleware/reporter'
import thunk from '../middleware/thunk'
import reduxIO from '../components/chat/io.middleware';

export const store = createStore(reducer, applyMiddleware(redixIO, thunk,reporter));

