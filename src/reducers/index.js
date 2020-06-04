import {combineReducers} from 'redux';

import movies from './movies_reducer';
import artists from './artists_reducer';
const rootReducer = combineReducers({
    movies,artists
});

export default rootReducer;