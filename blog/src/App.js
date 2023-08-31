/* eslint-disable */ // Lint 끄는 기능 (Warning 메시지 없애기)

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '가로수길 피자 맛집'; // 자료를 잠깐 저장할 땐 변수(let, var, const) 사용
  // document.querySelector('h4').innerHTML = post; // 변수에 있던 자료를 html에 넣음

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '가로수길 피자 맛집', '파이썬 독학']); // useState(보관할 자료)
  // 데이터 변경 시 자동으로 html에 반영되게 하고 싶으면 일반 변수 대신 state를 사용
  // => 자주 변경될 것 같은 html 부분은 state로 만들기

  let [따봉, 따봉변경] = useState(0); // state변경함수

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
        {/* <h4 style={ {color : 'red', fontSize : '16px'} }>블로그</h4> */}
      </div>

      <button onClick={ () => {

        let copy = [...글제목]; // state가 array/object면 shallow copy(deep copy)를 만들어서 수정해야 함
        copy[0] = '남자 코트 추천';
        글제목변경(copy);
      } }>글수정</button>

      <div className="list">
        <h4>{ 글제목[0] }<span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>8월 24일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>8월 27일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>8월 29일 발행</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {  // 컴포넌트 사용
  return (
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;


// JSX 문법 
// 1. class 넣을 땐 className
// 2. 변수 넣을 땐 {변수명}
// 3. style 넣을 땐 style={ {이름 : '값'} }

// Fragments : 의미 없는 <div></div> 대신 <></> 사용 가능