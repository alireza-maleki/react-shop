import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  dataReducer,
  searchReducer,
  addToCardReducer,
  detailReducer,
  plusReducer,
  nextReducer,
  postNameReducer,
  postEmailReducer,
  postPasswordReducer,
  postRepeatPasswordReducer,
  loginReducer,
  postErrorReducer,
  userExistReducer,
  productInformationReducer,
  invalidErrorReducer,
  mainDataReducer,
  setAddressreducer,
} from "./reducer";

const reducers = combineReducers({
  post: dataReducer,
  information: productInformationReducer,
  search: searchReducer,
  add: addToCardReducer,
  detail: detailReducer,
  plus: plusReducer,
  next: nextReducer,
  namePost: postNameReducer,
  emailPost: postEmailReducer,
  passwordPost: postPasswordReducer,
  repeatPasswordPost: postRepeatPasswordReducer,
  isLogedIn: loginReducer,
  postError: postErrorReducer,
  exist: userExistReducer,
  invalid: invalidErrorReducer,
  mainData: mainDataReducer,
  address: setAddressreducer,
});

const middleware = [thunk];
const initialState = {};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
