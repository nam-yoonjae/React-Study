import React from 'react';


function Hello({color, name, isSpecial}){
    return(
        <>
            <div>안녕하세요!</div>
            <div>이 프로젝트의 이름은 {name}  입니다.</div>
            <div style={{color:color}}>이 div의 color 는 {color} 입니다.</div>
            <div>{ isSpecial ? <b>*</b> : null }</div>
            <div>{ isSpecial && <b>*</b>}</div>
        </>

    );
}

Hello.defaultProps = {
    name : '이름없음'
    , color : '색깔없음'
}

export default Hello;