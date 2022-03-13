import NavBar from '../components/NavBar';
import Timer from '../components/Timer';
import About from '../components/About';
import Alarm from '../components/Alarm';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [timer, setTimer] = useState(20);
  const [shortBreak, setShortBreak] = useState(1);
  const [longBreak, setLongBreak] = useState(10);
  const [seconds, setSecond] = useState(0);
  const [stage, setStage] = useState(0);
  const [consumedSecond, setConsumedSecond] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  const alarmRef = useRef();
  const timerRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();

  const updateTimeDefaultValue = () => {
    setTimer(timerRef.current.value);
    setShortBreak(shortBreakRef.current.value);
    setLongBreak(longBreakRef.current.value);
    setOpenSetting(false);
    setSecond(0);
    setConsumedSecond(0);
  };
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
    updateTimeDefaultValue();
  };

  const timeUp = () => {
    reset();
    alarmRef.current.play;
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };

  // const muteAlarm = () => {
  //   alarmRef.current.pause;
  //   alarmRef.current.currentTime;
  // };

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
          <NavBar setOpenSetting={setOpenSetting} />
          <Timer
            stage={stage}
            switchStage={switchStage}
            getTickingTime={getTickingTime}
            seconds={seconds}
            ticking={ticking}
            setTicking={setTicking}
            // muteAlarm={muteAlarm}
            reset={reset}
          />
          <Modal
            openSetting={openSetting}
            setOpenSetting={setOpenSetting}
            timerRef={timerRef}
            shortBreakRef={shortBreakRef}
            longBreakRef={longBreakRef}
            updateTimeDefaultValue={updateTimeDefaultValue}
          />

          {/* <About /> */}
        </div>
        <div className='bg-[#E5E5E5] font-mallanna min-h-screen'>
          <div className='max-w-2xl min-h-screen mx-auto'>
            <About />
            <Alarm ref={alarmRef} />
            {/* <Modal /> */}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
