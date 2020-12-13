import {configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers";
import api from "./middlewares/api";
import func from "./middlewares/func";

const store = configureStore({
    reducer: reducers,
    middleware: [func, api]
});

export type AppDispatch = typeof store.dispatch;
export default store;