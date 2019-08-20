import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import simpleReducer from "./reducers/simpleReducer";
import {composeWithDevTools} from "redux-devtools-extension";


export default function configureStore() {
    return createStore(
        simpleReducer,
        composeWithDevTools(
            applyMiddleware(thunk),

        ));
}