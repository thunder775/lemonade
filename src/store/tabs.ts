import {createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "./reducers";

export enum NavigationTabs {
    HOME, CREATE, INBOX
}

const slice = createSlice({
    name: "tabs",
    initialState: {
        currentTab: NavigationTabs.HOME
    },
    reducers: {
        switchTab: (tabs, action) => {
            tabs.currentTab = action.payload.tab
        }
    }
});
export default slice.reducer;
export const {switchTab} = slice.actions;

//selectors
export const getCurrentTab = createSelector(
    (state: RootState) => state.entities.tabs,
    tabs => tabs.currentTab
)