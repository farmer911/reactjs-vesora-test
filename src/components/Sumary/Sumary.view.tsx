import React from 'react';
import Activity from "../Activity";
import Avatar from "../Avatar";
import Header from "../Header";
import Info from "../Info";
import { ISumary } from "./Sumary.props";

let i = 0
const Sumary = (props: ISumary): JSX.Element => {
    const {
        first_name,
        last_name,
        gender,
        birth_date,
        id,
        home_phone,
        mobile_phone,
        work_phone,
        email,
        activity = [],
        smsCarrier = [] } = props;

    console.log('render', i++)

    return (
        <div>
            <Header first_name={first_name} last_name={last_name} />
            <div className="d-flex" style={{ gap: 5 }}>
                <Avatar name={gender} age={birth_date} />
                <Info
                    id={id}
                    home_phone={home_phone}
                    mobile_phone={mobile_phone}
                    work_phone={work_phone}
                    email={email}
                />
                <Activity
                    data={activity}
                    background='#EDF5FF'
                    title='90-DAY COMMUNICATION ACTIVITY' />
                <Activity
                    data={smsCarrier}
                    background='#EDFFED'
                    title="SMS CARRIER STATUS"
                />
            </div>
        </div>
    )
}

export default React.memo(Sumary);
