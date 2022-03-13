import { FiX } from 'react-icons/fi';

export default function ModalSetting({
  timerRef,
  shortBreakRef,
  longBreakRef,
  openSetting,
  setOpenSetting,
  updateTimeDefaultValue,
}) {
  const inputs = [
    { value: 'Timer', ref: timerRef, defaultValue: 20 },
    { value: 'Short Break', ref: shortBreakRef, defaultValue: 5 },
    { value: 'Long Break', ref: longBreakRef, defaultValue: 10 },
  ];

  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${openSetting ? '' : 'hidden'
          }`}
        onClick={() => setOpenSetting(false)}
      ></div>
      <div
        className={`max-w-xl bg-neutral-200 absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-md ${openSetting ? '' : 'hidden'
          }`}
        style={{
          transform: 'translate(-50%,-50%)',
        }}
      >
        <div className='text-[#6d6d6d] flex justify-between items-center'>
          <h1 className='uppercase font-bold tracking-wider'>Time setting</h1>
          <FiX
            className='text-2xl cursor-pointer'
            onClick={() => setOpenSetting(false)}
          />
        </div>
        <div className='h-1 w-full bg-[#6d6d6d] mt-5 mb-5'></div>
        <div className='flex gap-5'>
          {inputs.map((input, index) => {
            return (
              <div key={index}>
                <h1 className='text-[#6d6d6d]] text-sm'>{input.value}</h1>
                <input
                  defaultValue={input.defaultValue}
                  type='number'
                  className='w-full bg-[#6d6d6d] bg-opacity-30 py-2 rounded outline-none text-center'
                  ref={input.ref}
                />
              </div>
            );
          })}
        </div>
        <button
          className='bg-blue-950 uppercase w-full mt-5 text-neutral-200 rounded py-2'
          onClick={updateTimeDefaultValue}
        >
          Save
        </button>
      </div>
    </>
  );
}
