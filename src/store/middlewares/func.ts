import {AppDispatch} from "../configureStore";
import {Middleware} from "@reduxjs/toolkit";

const func: Middleware = ({dispatch, getState}) => (next: AppDispatch) => (action: any) => {
    if (typeof action === 'function')
        action(dispatch, getState);
    else
        next(action);
}
export default func;