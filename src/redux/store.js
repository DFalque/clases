import { createStore, combineReducers } from "redux";
// Importamos los reducers
import reducerUno from "./reducers/reducerUno";
const reducer = combineReducers({
  //
  reducerUno,
});

const store = createStore(reducer);

export default store;
