import React, {useState} from "react";
import bottomNavBar from "./bottom_nav_bar.module.css";
import {getCurrentTab, switchTab} from "../../store/tabs";
import {useDispatch, useSelector} from "react-redux";

function BottomNavBar() {
    const dispatch = useDispatch();
    const currentTab = useSelector(getCurrentTab)

    return (<div className={bottomNavBar.bottom_group}>
        <div className={bottomNavBar.bottom_bar}>
            <div className={currentTab === 0 ? bottomNavBar.icon_group_selected : bottomNavBar.icon_group_unselected}
                 onClick={e => dispatch(switchTab({tab: 0}))
                 }>
                <i className={`fa fa-home fa-lg`}/>
                <span className={bottomNavBar.icon_text}>home</span>
            </div>
            <div className={currentTab === 1 ? bottomNavBar.icon_group_selected : bottomNavBar.icon_group_unselected}
                 onClick={e => dispatch(switchTab({tab: 1}))
                 }>
                <i className={`fa fa-plus-square-o fa-lg`}/>
                <span className={bottomNavBar.icon_text}>create</span>
            </div>

            <div className={currentTab === 2 ? bottomNavBar.icon_group_selected : bottomNavBar.icon_group_unselected}
                 onClick={e => dispatch(switchTab({tab: 2}))
                 }>
                <div className={bottomNavBar.notification_dot}/>
                <i className={`fa fa-inbox fa-lg`}/>
                <span className={bottomNavBar.icon_text}>inbox</span>
            </div>
        </div>
    </div>)
}

export default BottomNavBar;