import React, {useState} from 'react';

function InputSample2 () {

    const [inputs, setInputs] = useState({
        username : ''
        , nickname : ''
    });
 
    const {username, nickname} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
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