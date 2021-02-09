/* eslint-disable */ //코드 terminal에 warning 없애주기

import React, {Component, useState} from 'react';
import logo from './logo.svg';
import logo2 from './logo2.jpeg';
import './App.css';

const logo1Style={
  borderRadius:"0.25rem",
  width:"100px",
  margin:"15px"
}
const logo2Style={
  borderRadius:"0.25rem",
  width:"100px",
  margin:"15px"
}
const alignCenter={
  textAlign:"left",
  backgroundColor:"aliceblue"
}
const testStyle={
  textAlign:'left'
}
const cursorPointerSt={
  cursor:"pointer"
}

const user = {
  firstName : 'Michael',
  lastName : 'Jordan'
};
const name = '윤재';
const hello = <h1>Hello, {name}!</h1>;
const element = <div tabIndex="0"></div>;
//const title = response.potentiallyMaliciousInput;
//const titleInput = <h1>{title}</h1>;
const element2 = React.createElement(
  'h1',{className:'greeting'},'Hello, World!'
);

//Component만드는 방법
function Modal(){
  return (
    <div className="modal" style={alignCenter}>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
};

function formatName(user){
  return user.firstName + ' '+ user.lastName;
};

function getGreeting(user) {
  if(user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  } else {
    return <h1>Hello, Stranger!..</h1>;
  }
}
function returnName(name){
  return <h1>My name is {name}</h1>
}

function App() {
  let [글제목, 글제목변경] = useState(['마곡 곱창 존맛', '마곡 할맥 대존맛', '마곡 중화요리 전문점 요리판']);
  let [작성일, 작성일변경] = useState(['1월 24일 작성','1월 23일 작성', '1월 10일 작성']);
  let [따봉1, 따봉수변경1] = useState(0);
  let [따봉2, 따봉수변경2] = useState(0);
  let [따봉3, 따봉수변경3] = useState(0);
  
  //함수 실행 방법
  //따봉수변경();
  //근데 이렇게 하면 App() function 안에서 계속 따봉수변경함수를 실행함 
  //사용법 : () 안에 값을 넣으면 그 값으로 대체한다.

  // 함수 만드는 방법
  function 제목바꾸기(){
    //var newArray = 글제목; //이렇게 하면 안됨 이거는 그냥 레퍼런스 전달임
    //글제목[0] = 123123; //이런식으로 해도 안됨 
    var newArray = [...글제목]; //글제목을 deep copy 함
    //state 는 직접 건들지마셈 deep copy 해서 그걸 건드려야한다.
    //완전 별개의 Array 인데 완전 복사를 함
    //리액트 대 원칙:immutable data 직접 수정할 수 없다.
    newArray[0] = '여자 코트 추천'; // 0번째를 새로운 데이터로 만듦
    글제목변경(newArray);
    // 데이터 변경하기 정리 
    // 1. 일단 기존 state 카피본을 만든다.
    // 2. 카피본에다가 수정사항을 반영한다.
    // 3. 수정사항을 변경함수() 에 집어넣는다. 끗
  }

  return (
    // start of App Div -------------------->
    <div className="App">
      <div className="black-nav">
          <img src={logo} style={logo1Style}/>
          <img src={logo2} style={logo2Style}/>
          <div>
            <h1>React App</h1>
          </div>
      </div>
      <button onClick={ 제목바꾸기 }>제목바꾸기 버튼임</button>
      <Modal/>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{ 따봉수변경1(따봉1+1)}} style={cursorPointerSt}> ❤️ </span>{따봉1}</h3> 
        <p> {작성일[0]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]} <span onClick={ ()=>{ 따봉수변경2(따봉2+1)}} style={cursorPointerSt}> ❤️ </span>{따봉2}</h3> 
        <p> {작성일[1]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[2]} <span onClick={ ()=>{ 따봉수변경3(따봉3+1)}} style={cursorPointerSt}> ❤️ </span>{따봉3}</h3> 
        <p> {작성일[2]} </p>
        <hr/>
      </div>
      <div className="buttonList" style={testStyle}>
        <ul>
          <li><a href="https://google.co.kr">구글</a></li>
          <li>{hello}</li>
        </ul>
        <div>
          {2+2} <br/>
          <p>{formatName(user)}</p>
          <p>흠 이제 뭐하지</p>
          <p>{getGreeting(user)}</p>
          <p>{returnName(name)}</p>
          <p>{element}</p>
          {/* <p>{titleInput}</p> */}
          {element2}
        </div>
      </div>

      

    </div>
    // End of App Div -------------------->
  );
}


export default App;
