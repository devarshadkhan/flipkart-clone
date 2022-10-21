import { createStore } from "redux";
import rootred from "./redux/reducers/Main";


const store = createStore(
    rootred
);


export default store;