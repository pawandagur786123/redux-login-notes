import { createStore,combineReducers  } from "redux";
import notesReducer from "./notesReducer";
import authReducer from "./authreducer";

const rootReducer = combineReducers({
    auth : authReducer,
    notes: notesReducer
});

let store = createStore(rootReducer);
export default store;

