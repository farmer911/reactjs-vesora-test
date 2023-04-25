import { useLocation } from 'react-router-dom';
import './HeadlineTable.scss'
import Table from '../Table';
import { useEffect, useState } from 'react';
import ErrorTab from '../ErrorTab';
import { useDispatch } from 'react-redux';
import getOrderAction from '../../store/actions/orderTab';

const HeadlineTable = (): JSX.Element => {
  const [isErrorTab, setIsErrorTab] = useState<boolean>(false);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const tab = query.get('tab')

  const dispatch = useDispatch()

  useEffect(() => {
    setIsErrorTab(false)
  }, [tab])

  const callApiAction = (condition: boolean) => {
    dispatch(getOrderAction.request())
    setIsErrorTab(condition)
  }

  return (
    <>
      <div className='headline d-flex'>
        <div className="headline__button d-flex">
          <button
            className={`headline__btn ${!isErrorTab ? 'active' : 'non-active'} d-flex d-center`}
            onClick={() => callApiAction(false)}>
            sent
          </button>
          <button
            className={`headline__btn ${isErrorTab ? 'active' : 'non-active'}`}
            onClick={() => callApiAction(true)}>
            error
          </button>
        </div>

        <div className="headline__recent d-flex d-center">
          RECENT ORDERS
        </div>
      </div>
      {
        isErrorTab ? <ErrorTab /> : <Table />
      }
    </>
  )
}

export default HeadlineTable;