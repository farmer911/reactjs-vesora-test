import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getProfileAction } from './store/actions';
import getOrderAction from './store/actions/orderTab';
import './App.scss'
import Home from './routes/Home/Home.container';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction.request())
    dispatch(getOrderAction.request())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default App;
