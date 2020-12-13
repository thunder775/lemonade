import React, {useEffect} from "react";
import MyExperienceCard from "./myExperienceCard/MyExperienceCard";
import myExperienceSection from "./my_experiences_section.module.css"
import CreateExperienceCard from "./createExperienceCard/CreateExperienceCard";
import {useDispatch, useSelector} from "react-redux";
import {getExperienceItems, loadExperienceItems} from "../../store/experienceItems";

function MyExperienceSection() {
    const dispatch = useDispatch();
    const items = useSelector(getExperienceItems)
    useEffect(() => {
        dispatch(loadExperienceItems());
    }, []);
    return (
        <div>
            <div className={myExperienceSection.my_experiences}>my experiences</div>
            <div className={myExperienceSection.section}>

                <CreateExperienceCard/>
                {
                    items.map((item, index) => <MyExperienceCard item={item} id={index}/>
                    )
                }
            </div>
        </div>
    );
}

export default MyExperienceSection;