import React from 'react';
import BottomNavBar from "./components/bottomNavBar/BottomNavBar";
import MyExperienceSection from "./components/myExperienceSection/MyExperiencesSection";
import store from "./store/configureStore";
import {Provider} from 'react-redux';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div>
                <MyExperienceSection/>`
                <BottomNavBar/>
            </div>
        </Provider>
    );
}

export default App;
