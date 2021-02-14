import React, {useState} from 'react';

function Counter () {

    const [number, setNumber] = useState(0);

    const onIncrease =() => {
        setNumber(number=> number+1);
        console.dir(number);
    }
    const onDecrease =() => {
        setNumber(number=>number-1);
        console.dir(number);
    }
    const onDouble =() => {
        setNumber(number*2);
    }


    return (
        <>
            <div>
                <h1>{number}</h1>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
                <button onClick={onDouble}>x2</button>
            </div>
        </>
    );
}

export default Counter;