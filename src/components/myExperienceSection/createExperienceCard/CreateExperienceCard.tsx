import React from "react";
import createExperienceCard from "../my_experiences_section.module.css"

function CreateExperienceCard() {
    return (
        <div className={createExperienceCard.create_experience_Card}>
            <div className={createExperienceCard.create_FAB}>
                <i className={`fa fa-plus-square-o `}/>
            </div>
            <span className={createExperienceCard.text}>CREATE</span>
            <span className={createExperienceCard.subtext}>festival</span>
        </div>
    );
}

export default CreateExperienceCard;