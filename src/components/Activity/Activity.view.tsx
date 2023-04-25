import React from "react";
import './Activity.scss'

interface Idata {
  number: number | string,
  name: string;
}

interface IActivivy {
  data: Idata[],
  background: string,
  title: string,
}

const Activity = (props: IActivivy): JSX.Element => {
  const { data, background, title } = props;
  return (
    <div className="activity">
      <div className="activity__header d-flex d-center lp-0"
        style={{ background: background }}
      >
        {title}
      </div>
      <div className="d-flex activity__container">
        {
          data.map((item, index) => (
            <div className="activity__block" style={{ background: background }} key={index}>
              <div className="activity__block__number d-flex d-center lp-0">
                {item.number}
              </div>
              <div className="activity__block__tab d-flex d-center">
                <span>{item.name}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Activity;