import { useEffect, useState } from "react";

function Time1() {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
    console.log("Time1");
  }, 1000);

  return <div>{time.toLocaleTimeString()}</div>;
}

function Time2() {
  const [time, setTime] = useState(new Date());

  // пустой список зависимости значит выполнится 1 раз после первого создания
  // а возвращаемая функция это что нужно выполнить при размонтировании
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      console.log("Time2");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}

function EffectCleanMemory() {
  const [show, setShow] = useState(true);

  setTimeout(() => setShow(false), 3000);

  return (
    <div>
      <h2>Смотри консоль</h2>
      {show && <Time1 />}
      {show && <Time2 />}
    </div>
  );
}

export default EffectCleanMemory;
