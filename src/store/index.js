import { createStore } from "redux";
import myReducer from "../reducers";

const initialState = {
  students: {},
  isloading: false,
  errors: null
};
//if students array, then update the state with array
//isloading !false returns a spinner with a timeout otherwise isloading loads the fetched info
//if state of errors is null, update the state to fetched infos otherwise show errors
export default function configureStore() {
  return createStore(
    myReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

