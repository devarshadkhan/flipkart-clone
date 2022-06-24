import { createStore } from "redux";
import rootred from "./Redux/Reducers/Main";


const store = createStore(
    rootred
);


export default store;