import React from "react";
import myExperienceCard from "../my_experiences_section.module.css";

interface Item {
    cover: string;
    host_expanded: { image_avatar: string };
    title: string;
    start: string;
    end: string;
    latitude: number;
    longitude: number;
    cost: number;
    currency: string;
}

const currencyMap: any = {
    'EUR': '€',
    'USD': '$'
}

function MyExperienceCard({id, item}: { id: number, item: Item }) {
    const date = new Date(item.start);
    const formattedDate = date.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'short',});
    const formattedTime = date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
    const dist = Math.round(Number(calcCrow(41.3851, 2.1734, item.latitude, item.longitude).toString()) * 10) / 10
    return (
        <div className={myExperienceCard.overlay}>
            <div key={id} className={myExperienceCard.outer_container}>
                <div className={myExperienceCard.top_Group}>
                    <img className={myExperienceCard.image}
                         src={item.cover || "https://via.placeholder.com/300"}
                         alt=""/>
                    <div className={myExperienceCard.live}>LIVE</div>

                    <div className={myExperienceCard.avatar}>
                        <img className={myExperienceCard.image}
                             src={item.host_expanded.image_avatar || "https://via.placeholder.com/20"}
                             alt=""/>
                    </div>
                </div>
                <div className={myExperienceCard.bottom_group}>
                    <div className={myExperienceCard.event_detail_container}>
                        <span className={myExperienceCard.event_name_text}>{item.title}</span>
                        <span
                            className={myExperienceCard.event_time_text}>{formattedDate} . {formattedTime} . {dist} km</span>
                    </div>
                    <div className={myExperienceCard.price_button}>{currencyMap[item.currency]} {item.cost}</div>
                </div>
            </div>
        </div>
    )
}

function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
    let R = 6371; // km
    let dLat = toRad(lat2 - lat1);
    let dLon = toRad(lon2 - lon1);
    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(Value: number) {
    return Value * Math.PI / 180;
}

export default MyExperienceCard;

