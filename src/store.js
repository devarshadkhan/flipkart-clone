import { createStore } from "redux";
import rootred from "./redux/Reducers/Main";


const store = createStore(
    rootred
);


export default store;
