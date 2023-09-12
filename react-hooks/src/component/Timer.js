import React, { useEffect } from "react";

// 타이머 컴포넌트가 처음 마운트 될 때(나타났을 때)
const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중..");
    }, 1000);

    // 타이머 컴포넌트가 언마운트 될 때(사라질 때)
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;