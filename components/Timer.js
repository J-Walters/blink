export default function Timer() {
  const options = ['Timer', 'Short Break', 'Long Break'];

  return (
    <div className='text-[#E5E5E5] w-10/12 mx-auto pt-5 flex flex-col justify-center items-center mt-10'>
      <div className='flex gap-5 items-center'>
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${
                index === 0 ? 'bg-gray-500 bg-opacity-30' : ''
              } py-0.5 px-3 cursor-pointer transition-all rounded`}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className='mt-10 mb-10'>
        <h1 className='text-8xl font-bold select-none m-0'>20:00</h1>
      </div>
      <button className='px-16 py-2 text-2xl rounded-md bg-[#E5E5E5] text-[#3969A0] uppercase drop-shadow-lg'>
        Start
      </button>
    </div>
  );
}
