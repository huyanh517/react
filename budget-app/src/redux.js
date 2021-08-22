import { createStore } from "redux"
import { actTotalRemain } from './actions/index';
import { appReducers } from './reducers/index';

const store = createStore(appReducers)

console.log('Init: ', store.getState())

store.dispatch(actTotalRemain())
console.log('TOTAL_REMAIN', store.getState())


export default store