import {combineReducers} from "redux";
import experienceItems from './experienceItems';
import tabs from './tabs';

export default combineReducers({
    experienceItems: experienceItems,
    tabs: tabs
})