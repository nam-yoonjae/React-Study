import React, {useState} from 'react';

function InputSample2 () {

    const [inputs, setInputs] = useState({
        name : ''
        , nickname : ''
    });
 
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const onReset = () => {
        setInputs({
            name : ''
            , nickname : ''
        });
    }

    return (
        <>
            <div>
                <input name="name" onChange={onChange} placeholder="이름"/>
                <input name="nickname" onChange={onChange} placeholder="닉네임"/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값 : </b>
                    <span>{name}({nickname})</span>
                </div>
            </div>

        </>
    );
}

export default InputSample2;