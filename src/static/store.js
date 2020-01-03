import { createStore,combineReducers } from 'redux'
import * as Reducers from '../Reducers'

const store = createStore(combineReducers(Reducers));

export default store