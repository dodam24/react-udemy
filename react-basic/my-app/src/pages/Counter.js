import React, { useState } from "react";  // useState(): 컴포넌트에서 동적인 값을 관리하는 함수

const Counter = () => {
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1); // 반드시 setter 함수를 통해서만 상태 관리 가능
    };

    const decrease = () => {
        setNumber(num - 1); 
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
};

export default Counter;