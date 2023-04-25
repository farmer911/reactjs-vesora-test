import React from 'react';
import At from '../../res/svg/At';
import Building from '../../res/svg/Building';
import Home from '../../res/svg/Home';
import Mobile from '../../res/svg/Mobile';
import User from '../../res/svg/User';
import './Info.scss'

interface IInfo {
  id: number;
  home_phone: string;
  mobile_phone: string;
  work_phone: string;
  email: string;
}

const Info = (props: IInfo): JSX.Element => {
  const { id, home_phone, mobile_phone, work_phone, email } = props;
  return (
    <div className="d-column info">
      <div className="d-flex info__row">
        <User width={14} height={14} fill='#B0C6D8' />
        <span>{id && `#${id}`}</span>
      </div>
      <div className="d-flex info__row">
        <Mobile width={14} height={14} fill='#B0C6D8' />
        <span>{mobile_phone}</span>
      </div>
      <div className="d-flex info__row">
        <Building width={14} height={14} fill='#B0C6D8' />
        <span>{home_phone}</span>
      </div>
      <div className="d-flex info__row">
        <Home width={14} height={14} fill='#B0C6D8' />
        <span>{work_phone}</span>
      </div>
      <div className="d-flex info__row">
        <At width={14} height={14} fill='#B0C6D8' />
        <span>{email}</span>
      </div>
    </div>
  )
}

export default React.memo(Info);