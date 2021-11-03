import { createStore } from "redux";
import reducer from "../redux/reduxConfig";

const store = createStore(reducer);

export default store;