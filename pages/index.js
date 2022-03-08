import NavBar from '../components/NavBar';
import Timer from '../components/Timer';
import About from '../components/About';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timer, setTimer] = useState(20);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [seconds, setSecond] = useState(0);
  const [stage, setStage] = useState(0);
  const [ticking, setTicking] = useState(false);

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
      0: setTimer,
      1: setShortBreak,
      2: setLongBreak,
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
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };

  useEffect(() => {
    const timers = setInterval(() => {
      if (ticking) {
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(timers);
    };
  }, [seconds, timer, shortBreak, longBreak, ticking]);

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
            ticking={ticking}
            setTicking={setTicking}
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
