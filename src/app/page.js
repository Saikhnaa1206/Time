"use client";
import { useState, useEffect } from "react";
const Page = () => {
  const [time, setTime] = useState(0);
  const add = () => {
    setTime((prev) => prev + 1);
  };
  useEffect(() => {
    const int = setInterval(add, 1000);
    return () => clearInterval(int);
  }, []);
  const click1 = () => {
    setTime((prev) => (prev > 14 ? prev - 15 : 0));
  };
  const click2 = () => {
    setTime((prev) => prev + 15);
  };
  const min = Math.floor(time / 60);
  const sec = time % 60;
  const realTime = () => {
    const minute = min < 10 ? `0${min}` : min;
    const second = sec < 10 ? `0${sec}` : sec;
    return (
      <div>
        {minute}:{second}
      </div>
    );
  };
  return (
    <div className="container1">
      <div className="time1">{realTime()}</div>
      <div className="buttons">
        <button className="button" onClick={() => click1()}>
          -0:15
        </button>
        <button className="button" onClick={() => click2()}>
          +0:15
        </button>
      </div>
    </div>
  );
};
export default Page;
