import './App.css';
import './App.scss'
import Parent from './Parent';
import Test from './Test';

function App() {

  return (
    <div className="container">
      <Parent>
        <Test />
      </Parent>
    </div>
  );
}

export default App;
