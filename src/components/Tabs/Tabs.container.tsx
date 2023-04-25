import { useLocation, useNavigate } from 'react-router-dom';
import './Tabs.scss'
import { Tablet } from './Tabs.props';


const Tabs = (): JSX.Element => {
  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const tab = query.get('tab')
  const active = [1,2,3,4,5].includes(Number(tab)) ? Number(tab) : 3

  return (
    <div className='tabs-container'>
      <div className="d-flex d-center tabs-container__block">
        {
          Tablet.map((item, index) => (
            <div
              className={`tabs-container__block__item ${active === item.active ? 'active' : 'non-active'} d-flex d-center`}
              onClick={() => navigate(item.query)}
              key={index}
            >
              {item.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tabs;