import {createSelector, createSlice} from "@reduxjs/toolkit";
import {apiCallBegan} from "./api";
import {AppDispatch} from "./configureStore";
import {RootState} from "./reducers";

const slice = createSlice({
    name: 'experienceItems',
    initialState: {
        items: [],
        loading: false,
    }, reducers: {
        experienceItemsRequested: (experienceItems, action) => {
            experienceItems.loading = true;
        },
        experienceItemsReceived: (experienceItems, action) => {
            experienceItems.items = action.payload.data.getHomeEvents;
            experienceItems.loading = false;
        },
        experienceItemsRequestFailed: (experienceItems, action) => {
            experienceItems.loading = false;
        },
    },
});
const {experienceItemsRequested, experienceItemsReceived, experienceItemsRequestFailed} = slice.actions;
export default slice.reducer;

// actions
export const loadExperienceItems = () => (dispatch: AppDispatch, getState: RootState) => {
    let url = 'https://backend.staging.lemonade.social/graphql';
    let method = 'post';
    let data = {
        query: `
      {  getHomeEvents(longitude: 2.1734, latitude: 41.3851) {cover,host_expanded { image_avatar },title,start,end,latitude,longitude,cost,currency  }}
      `
    }
    dispatch(apiCallBegan({
        url,
        method,
        data,
        onStart: experienceItemsRequested.type,
        onSuccess: experienceItemsReceived.type,
        onError: experienceItemsRequestFailed.type,
    }))
}

//selectors
export const getExperienceItems = createSelector(
    (state: RootState) => state.entities.experienceItems,
    experienceItems => experienceItems.items
)
