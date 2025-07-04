import { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(prev => !prev);
  };

  const formattedTime = time.toLocaleTimeString('it-IT'); // HH:mm:ss

  return (
    <div className="timer-container">
      <h1 className="time-display">{formattedTime}</h1>
      <button
        className={isRunning ? 'stop-btn' : 'start-btn'}
        onClick={handleToggle}
      >
        {isRunning ? '타이머 정지' : '타이머 시작'}
      </button>
    </div>
  );
}

export default Clock;
