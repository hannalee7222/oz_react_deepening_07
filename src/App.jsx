import './App.css';  //스타일 파일
import { useState } from 'react'; //useState Hook가져오기 -> 컴포넌트의 상태를 관리할 수 있게 해줌.
import Clock from './Clock'; //Clock컴포넌트를 가져온다. -> 렌더링 여부를 토글할 대상 컴포넌트

function App() {
  //componentRunning 상태 : Clock컴포넌트가 화면에 보일지 여부를 관리한다.

  //true면 Clock이 보이고, false면 안보임.
  //useState(true)는 어떤 값을 저장하고, 그 값을 바꿀 수 있는 함수를 함께 줌.
  //즉, [현재상태값(true또는 false), 상태를 바꾸는 함수]
  const [componentRunning, setComponentRunning] = useState(true);

  //버튼 클릭 시 호출되는 함수. true와 false상태를 토글함.
  const handleComponentToggle = () => {
    setComponentRunning(prev => !prev); //지금 상태를 반대로 바꾸는 함수
  } //이전 상태의 반대값으로 설정

  return (
      <div className="container"> {/* 전체를 감싸는 컨테이너 */}

        {/* 토글 버튼 */}
        <button 
        //if문 짧게 쓰기 -> 조건? true : false
        className={componentRunning ? 'stop-btn' : 'start-btn'} //상태에 따라 다른 클래스 적용
        onClick={handleComponentToggle} //버튼 클릭 시 상태 토글
        >
            {/* 버튼 텍스트도 상태에 따라 다르게 표시 */}
            {componentRunning ? '컴포넌트 정지' : '컴포넌트 시작'}
          </button>
            {/* 조건부 렌더링 : 왼쪽이 true일때만 오른쪽을 보여줌.}
            {/* componentRunning이 true일 때만 Clock컴포넌트를 렌더링 */}
          {componentRunning && <Clock />}
      </div>
    
  );
}

export default App;
