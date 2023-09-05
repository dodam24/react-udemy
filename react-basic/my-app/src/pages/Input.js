import React, { useState } from "react";  // useState(): 컴포넌트에서 동적인 값을 관리하는 함수

const Input = () => {
    const [txtValue, setTextValue] = useState("");

    const onChange = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            <br />
            <p>{txtValue}</p>
        </div>
    );
};

export default Input;