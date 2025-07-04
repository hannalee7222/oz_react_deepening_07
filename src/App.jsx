import './App.css';
import { useState } from 'react';
import Clock from './Clock';

function App() {
  const [componentRunning, setComponentRunning] = useState(true);

  const handleComponentToggle = () => {
    setComponentRunning(prev => !prev);
  }

  return (
      <div className="container">
        <button className={componentRunning ? 'stop-btn' :
          'start-btn'} onClick={handleComponentToggle}>
            {componentRunning ? '컴포넌트 정지' : '컴포넌트 시작'}
          </button>

          {componentRunning && <Clock />}
      </div>
    
  );
}

export default App;
