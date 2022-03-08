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
  const [consumedSecond, setConsumedSecond] = useState(0);
  const [ticking, setTicking] = useState(false);

  const switchStage = (index) => {
    const isYes =
      consumedSecond && stage !== index
        ? confirm('Are you sure you want to switch?')
        : false;
    if (isYes) {
      reset();
      setStage(index);
    }
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

  const reset = () => {
    setTicking(false);
    setSecond(0);
    setTimer(25);
    setShortBreak(5);
    setLongBreak(10);
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      reset();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSecond ? 'Show warning' : '';
    };
    const timers = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value + 1);
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
