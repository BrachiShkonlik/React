import { createStore } from "redux"
import { allReducers } from "./Redusers"

const store = createStore(
     allReducers,
     );
store.getState();
export default store;