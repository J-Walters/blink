import NavBar from '../components/NavBar';
import Timer from '../components/Timer';
import About from '../components/About';
import { useState } from 'react';

export default function Home() {
  const [timer, setTimer] = useState(20);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);

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

  return (
    <>
      <div className='bg-[#3969A0] min-h-screen font-mallanna'>
        <div className='max-w-2xl min-h-screen mx-auto'>
          <NavBar />
          <Timer
            stage={stage}
            switchStage={switchStage}
            getTickingTime={getTickingTime}
          />
          {/* <About /> */}
        </div>
        <div className='bg-[#E5E5E5] font-mallanna'>
          <div className='max-w-2xl mx-auto'>
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
