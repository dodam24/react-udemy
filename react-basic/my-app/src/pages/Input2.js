import React, { useState } from "react";  // useState(): 컴포넌트에서 동적인 값을 관리하는 함수

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = inputs;  // 오브젝트 분해 기법

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // inputs[id] = value; // X
        setInputs({
            ...inputs,   // 깊은 복사: 스프레드 문법 사용. 깊은 복사해서 새로운 오브젝트를 생성
            [id]: value
        });
    };
 
    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    );
};

export default Input2;