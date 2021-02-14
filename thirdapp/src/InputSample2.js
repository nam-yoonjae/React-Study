import React, {useState} from 'react';

function InputSample2 () {

    const [inputs, setInputs] = useState({
        username : ''
        , nickname : ''
    }); // 객체 형태로 두 input 태그의 name 속성의 초기값을 설정해준다.
 
    const {username, nickname} = inputs; //inputs 상태값을 destructuring 하여 두 name 값을 추출한다.
                                         // 그니까 useState 를 이용한 inputs 의 값을 쪼개서 가져온다는 뜻인듯??

    const onChange = (e) => {
        const {value, name} = e.target;  // 이벤트 타겟의 속성 value 와 name 값을 추출한다.
                                        // 이벤트가 일어났을때 그 객체의 value 값과 name 값을 뽑아내는듯??
        setInputs({
            ...inputs,
            [name] : value 
            // inputs[name]=value 와 같이 직접 리액트 객체를 수정할 수 없다.
            // 대신 spread 문법을 이용하여 (전체 복사) ...inputs, 기존 객체를 복사하여 새로운 객체를 만들고,
            // 이 새로운 객체에서 상태를 업데이트 [name] : value 한다.
            // 여기서 input 객체의 attribute값인 name은 "username" 도 있고 "nickname" 도 있으므로
            // 대괄호로 배열처리한다.   
        });
    }

    const onReset = () => {
        setInputs({
            username : ''
            , nickname : ''
        });
    }

    return (
        <>
            <div>
                <input name="username" onChange={onChange} value={username} placeholder="이름"/>
                <input name="nickname" onChange={onChange} value={nickname} placeholder="닉네임"/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값 : </b>
                    <span>{username}({nickname})</span>
                </div>
            </div>

        </>
    );
}

export default InputSample2;