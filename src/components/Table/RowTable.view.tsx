import moment from "moment";
import { TypeOrder } from "../../types/IOrder"
import React from "react";
import '../ErrorTab/ErrorTab.scss'

const RowTable = (props: { tableData: TypeOrder[] }): JSX.Element => {
  const { tableData } = props;
  return (
    <>
      {
        tableData.map((item) => (
          <tr style={{ background: item.id % 2 === 0 ? '#F2F4F7' : '#FFFFFF' }} key={item.id}>
            <td colSpan={2} width={'15%'}>
              <div className="d-flex d-column table-subject">
                <div className="table-subject__headline">
                  {
                    moment(item.sent_dt).format('ddd, MMM DD')
                  }
                </div>
                <div className="table-subject__des">
                  {
                    moment(item.sent_tm, "HH:mm").format('hh:mm A')
                  }
                </div>
              </div>
            </td>
            <td colSpan={6} width={'45%'}>
              <div className="d-flex d-column table-subject">
                <div className="table-subject__headline">
                  {
                    item.subject.title
                  }
                </div>
                <div className="table-subject__des">
                  {
                    item.subject.email
                  }
                </div>
              </div>
            </td>
            <td colSpan={2} width={'22%'}>
              <div className="d-flex d-column table-subject">
                <div className="table-subject__des">
                  {item.type}
                </div>
              </div>
            </td>
            <td colSpan={2} width={'20%'}>
              <div className="d-flex d-column table-subject">
                <div className="table-subject__des">
                  {item.order_id}
                </div>
              </div>
            </td>
            <td colSpan={2}>
              <div className="d-flex d-center">
                <button className="table-container__btn">RESEND</button>
              </div>
            </td>
          </tr>
        ))
      }
    </>
  )

}

export default React.memo(RowTable);