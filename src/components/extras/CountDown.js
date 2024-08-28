import { defaultCountDown } from '@/constants/defaultValue';
import React, { useEffect, useState } from 'react';

const CountDown = ({
  isFinishedCountDown,
  setIsFinishedCountDown,
}) => {
  const [second, setSecond] = useState(defaultCountDown);

  useEffect(() => {
    if (second > 0) {
      const timer = setInterval(() => {
        setSecond((prevSecond) => prevSecond - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsFinishedCountDown(true);
    }
  });

  const minutes = Math.floor(second / 60);
  const remainingSecond = second % 60;
  const lastSeconds = minutes < 1 && second < 15;

  return (
    <div>
      {isFinishedCountDown ? (
        <small className="text-danger ">
          کد ارسالی منقضی شده است!
        </small>
      ) : (
        <p
          className={`text-sm  ${
            lastSeconds
              ? 'animate-count-down text-danger'
              : 'text-primary'
          }`}
        >
          {minutes < 10 ? `0${minutes}` : minutes}:
          {remainingSecond < 10
            ? `0${remainingSecond}`
            : remainingSecond}
        </p>
      )}
    </div>
  );
};

export default CountDown;
