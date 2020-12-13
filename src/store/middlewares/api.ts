import axios from 'axios';
import {AppDispatch} from "../configureStore";
import {Middleware} from "@reduxjs/toolkit";

const api: Middleware = ({dispatch, getState}) => (next: AppDispatch) => async (action: any): Promise<void> => {
    if (action.type !== 'api/callBegan')
        return next(action);
    const {url, method, data, onSuccess, onError, onStart} = action.payload;
    if (onStart) dispatch({type: onStart});
    try {
        const response = await axios.request({
            url, method, data
        });
        if (onSuccess) dispatch({type: onSuccess, payload: response.data})

    } catch (error) {
        if (onError) dispatch({type: onError, payload: error.message})
    }
}
export default api;