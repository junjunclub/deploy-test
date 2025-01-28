import { useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [apiResponse, setApiResponse] = useState(''); // API 응답 상태

  // /api 호출 함수
  const handleHelloApiRequest = () => {
    axios
      .get('https://ssafygwangjuc1.duckdns.org:8081/api') // /api 호출
      .then((response) => {
        setApiResponse(response.data); // API 응답 저장
      })
      .catch((error) => {
        console.error('/api 요청 중 에러 발생:', error);
      });
  };

  // /api/test 호출 함수
  const handleTestApiRequest = () => {
    axios
      .get('https://ssafygwangjuc1.duckdns.org:8081/api/test') // /api/test 호출
      .then((response) => {
        setApiResponse(response.data); // API 응답 저장
      })
      .catch((error) => {
        console.error('/api/test 요청 중 에러 발생:', error);
      });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* API 응답 표시 */}
      <h1>{apiResponse || 'Loading...'}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* Hello 버튼: /api 호출 */}
        <button onClick={handleHelloApiRequest}>
          Hello
        </button>
        {/* Test 버튼: /api/test 호출 */}
        <button onClick={handleTestApiRequest}>
          Test
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;