import { useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [apiResponse, setApiResponse] = useState(''); // API 응답 상태
  const [catImage, setCatImage] = useState(''); // 고양이 이미지 상태

  // /api 호출 함수
  const handleHelloApiRequest = () => {
    axios
      .get('https://ssafygwangjuc1.duckdns.org/api')
      .then((response) => {
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error('/api 요청 중 에러 발생:', error);
      });
  };

  // /api/test 호출 함수
  const handleTestApiRequest = () => {
    axios
      .get('https://ssafygwangjuc1.duckdns.org/api/test')
      .then((response) => {
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error('/api/test 요청 중 에러 발생:', error);
      });
  };

  // 랜덤 고양이 사진 호출 함수
  const handleCatApiRequest = () => {
    axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCatImage(response.data[0].url); // 고양이 이미지 URL 저장
        }
      })
      .catch((error) => {
        console.error('고양이 API 요청 중 에러 발생:', error);
      });
  };

  return (
    <>
      {/* 고양이 사진 표시 */}
      {catImage && (
        <div className="cat-container">
          <img src={catImage} alt="A cute random cat" className="cat-image" />
        </div>
      )}
      <h1>{apiResponse || 'Loading...'}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleHelloApiRequest}>Hello</button>
        <button onClick={handleTestApiRequest}>Test</button>
        {/* Cat 버튼 */}
        <button onClick={handleCatApiRequest}>Cat</button>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;