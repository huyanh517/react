import { applyMiddleware, combineReducers, createStore } from "redux";
import postReducer from './post/reducer';
import authReducer from './auth/reducer';
import thunk from "redux-thunk";
import categoryReducer from './category/reducer';

const rootReducer = combineReducers({
  Post: postReducer,
  Auth: authReducer,
  Category: categoryReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store