import { useEffect, useState } from 'react';
//React에서 상태(State)와 효과(effect)를 사용할 수 있도록 각각 useState와 useEffect라는 훅을 불러온다.

function Clock() { //시계 컴포넌트의 시작

  //time 상태 : 현재 시각을 저장한다. 초기값은 현재 시간
  //setTime : 시간 값을 바꾸는 함수
  const [time, setTime] = useState(new Date());

  //isRunning 상태 : 타이머가 실행 중인지 여부(true, false)를 판단
  //setIsRunning : 실행 상태를 바꾸는 함수
  const [isRunning, setIsRunning] = useState(true);

  //useEffect 훅 : 타이머가 켜져 있을 때 1초마다 시간을 업데이트
  useEffect(() => {
    let timer;
    //변수 timer는 setInterval이 반환하는 ID(번호)를 저장하려고 만든 것임.
    //이 ID가 있어야 clearInterval을 할 수 있음.
    //setInterval은 단순히 반복 실행만 해주는 것이 아니라, 해당 타이머의 고유 ID를 반환해줌.
    //이 ID를 clearInterval(timer)에 넘겨줘야 정확히 그 타이머만 멈출 수 있음.
    //useEffect안에 선언된 이유는 매번 새롭게 실행될 때 새로운 타이머 ID를 저장할 수 있기 때문.

    //타이머가 실행 중일 때만(조건) setInterval로 시간 업데이트
    if (isRunning) {
      timer = setInterval(() => { //이렇게 값을 할당해주려고 밖에서 미리 선언만 하고 바꿔쓸 수 있는 let을 const대신 쓴 것임.
        setTime(new Date());
      }, 1000); //매 1초마다 현재 시각으로 업데이트
    }


    //클린업 함수 : 컴포넌트가 언마운트되거나(사라지거나), isRunning이 false가 될 때(멈출 때) 타이머 중단
    return () => {
      clearInterval(timer); //이전에 실행된 타이머를 정확하게 멈추기 위함
    };
  }, [isRunning]);  //isRunning이 바뀔 때마다 이 useEffect가 다시 실행됨

  //버튼 클릭 시 실행되는 함수(true <-> false). 실행 여부를 토글함.
  const handleToggle = () => {
    setIsRunning(prev => !prev);
  }; //이전 상태와 반대로 바꿈 (정지 -> 실행/ 실행-> 정지)

  //시간을 "시:분:초" 형식의 문자열로 변환 (이탈리아식 표기 : 24시간제)
  const formattedTime = time.toLocaleTimeString('it-IT'); // HH:mm:ss

  return (
    <div className="timer-container"> {/* 시계와 버튼을 감싸는 박스 */}
      <h1 className="time-display">{formattedTime}</h1> {/* 시:분:초 출력 */}
      <button
        //실행 상태에 따라 'stop-btn'과 'start-btn'클래스 바뀜 -> 버튼 색상 달라짐
        className={isRunning ? 'stop-btn' : 'start-btn'}
        //클릭 시 실행 상태 토글
        onClick={handleToggle}
      >
        {/* 버튼 텍스트도 실행 상태에 따라 다르게 */}
        {isRunning ? '타이머 정지' : '타이머 시작'}
        
      </button>
    </div>
  );
}

export default Clock; //Clock컴포넌트를 다른 파일에서도 쓸 수 있게 내보내줌.
