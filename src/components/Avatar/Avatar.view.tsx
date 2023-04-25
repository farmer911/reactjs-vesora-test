import React from "react";
import User from "../../res/svg/User";
import './Avatar.scss';
import moment from "moment";

interface IAvatar {
    name: string;
    age: string;
}

const Avatar = (props: IAvatar): JSX.Element => {
    return (
        <div className="avatar d-column avatar__container">
            <User width={63} height={72} />
            <div className="avatar__info">
                {props.name}-{moment(props.age, "YYYY/MM/DD").fromNow().split(" ")[0]}
            </div>
        </div>
    )
}

export default React.memo(Avatar);