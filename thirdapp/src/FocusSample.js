import React, {useState, useRef} from 'react';

function FocusSample () {

    const [inputs, setInputs] = useState({
        name : ''
        , nickname : ''
    });

    const nameInput = useRef(); //useRef() 를 사용하여 Ref 객체를 만든다.

    const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        
        const { value, name } = e.target; //우선 e.target에서 value 와 name 값을 추출
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () => {
        setInputs({
            name : ''
            , nickname : ''
        });
        nameInput.current.focus(); //Ref 객체로 선언했던 nameInput에 current.focuse() 하면 잡힌다!
    };


    return (
        <>
            <div>
                <input 
                name="name"
                placeholder="이름을 입력하세요"
                onChange={onChange}
                value={name}
                ref={nameInput}
                />
                <input
                name="nickname"
                placeholder="닉네임을 입력하세요"
                onChange={onChange}
                value={nickname}
                />
                <button onClick={onReset}>초기화</button>
                <div>
                    <h2>결과</h2>
                    <b>이름(닉네임) : {name}({nickname})</b>
                </div>
                
            </div>
        </>
    );
}

export default FocusSample;