import { applyMiddleware, combineReducers, createStore } from "redux";
import postReducer from './post/reducer';
import authReducer from './auth/reducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  Post: postReducer,
  Auth: authReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store