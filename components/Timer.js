export default function Timer({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  setTicking,
  reset,
}) {
  const options = ['Timer', 'Short Break', 'Long Break'];

  return (
    <div className='text-neutral-200 w-10/12 mx-auto pt-5 flex flex-col justify-center items-center mt-10'>
      <div className='flex flex-col w-10/12 justify-center items-center bg-[#6d6d6d] bg-opacity-30 py-10 px-20 rounded-md '>
        <div className='flex gap-5 items-center'>
          {options.map((option, index) => {
            return (
              <h1
                key={index}
                className={` ${index === stage ? 'bg-neutral-200 bg-opacity-30' : ''
                  } py-0.5 px-3 cursor-pointer transition-all rounded`}
                onClick={() => switchStage(index)}
              >
                {option}
              </h1>
            );
          })}
        </div>
        <div className='mt-10 mb-10'>
          <h1 className='text-8xl font-bold select-none m-0 '>
            {/* maybe a ternary operator for short break */}
            {getTickingTime()}:{seconds.toString().padStart(2, '0')}
          </h1>
        </div>
        <div></div>
        <button
          className='px-16 py-2 text-2xl rounded-md bg-neutral-200 text-blue-950 font-bold uppercase'
          onClick={() => setTicking((ticking) => !ticking)}
        >
          {ticking ? 'Stop' : 'Start'}
        </button>
        {ticking && (
          <button
            className='uppercase text-neutral-200 underline mt-5'
            onClick={reset}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
