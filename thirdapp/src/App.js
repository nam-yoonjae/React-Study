import React, { useState } from "react";
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import FocusSample from './FocusSample';
import UserList from './UserList';
import "./App.css";

function App() {
  return (
    <>
      {/* 
        삼항연산자 테스트
        {name === '리액트 테스트' ? (<h1>name 값이 리액트 테스트임다.</h1>) 
                              : (<h1>name 값이 액트 테스트가 아님다.</h1>) };
      */}
        {/* 주석
          여러줄 
          작성 */}
      <div className="header headerStyle">
        <h1>리액트 프로젝트 테스트 중입니다.</h1>
      </div>
      
      <div className="sideNav">
        <ul>
          <li>사이드 메뉴바</li>
          <li>사이드 메뉴바</li>
          <li>사이드 메뉴바</li>
        </ul>
      </div>
        
      <div>
          <Wrapper>
            <Hello name="react" color="red" isSpecial={true}/>
            <Hello color="pink"/>
          </Wrapper>
          <div>
            <h3>버튼 +1, -1 렌더링 예제</h3>
            <Counter/>
          </div>
          <div>
            <h3>input 예제1</h3>
            <InputSample/>
          </div>
          <div>
            <h3>input 예제2</h3>
            <InputSample2/>
          </div>
          <div>
            <h3>focus 예제</h3>
            <FocusSample/>
          </div>
          <div>
            <h3>배열 예제</h3>
            <UserList/>
          </div>
      </div>
    </>
  );
}

export default App;
