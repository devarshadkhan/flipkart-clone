import { createStore } from "redux";
import rootred from "./redux/reducers/Main.js";


const store = createStore(
    rootred
);


export default store;
