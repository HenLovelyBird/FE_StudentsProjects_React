import { createStore } from "redux";
import myReducer from "../reducers";

const initialState = {
  isFetching: {
    students: {},
    loading: false,
    errors: ""
  }
};
//false loading will set a spinner
//if state of errors is null, update the state to fetched infos
export default function configureStore() {
  return createStore(
    myReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

