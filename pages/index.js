import NavBar from '../components/NavBar';
import Timer from '../components/Timer';
import About from '../components/About';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timer, setTimer] = useState(20);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);

  const [seconds, setSeconds] = useState(0);

  const [stage, setStage] = useState(0);

  const switchStage = (index) => {
    setStage(index);
  };

  const getTickingTime = () => {
    const timeStage = {
      0: timer,
      1: shortBreak,
      2: longBreak,
    };

    return timeStage[stage];
  };

  const updateMinute = () => {
    const updateStage = {
      0: timer,
      1: shortBreak,
      2: longBreak,
    };

    return updateStage[stage];
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      alert('Times up');
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSeconds(59);
    } else {
      setSeconds((second) => second - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      clockTicking();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, timer, shortBreak, longBreak]);

  return (
    <>
      <div className='bg-[#3969A0] min-h-screen font-mallanna'>
        <div className='max-w-2xl min-h-screen mx-auto'>
          <NavBar />
          <Timer
            stage={stage}
            switchStage={switchStage}
            getTickingTime={getTickingTime}
            seconds={seconds}
          />
          {/* <About /> */}
        </div>
        <div className='bg-[#E5E5E5] font-mallanna min-h-screen'>
          <div className='max-w-2xl min-h-screen mx-auto'>
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
