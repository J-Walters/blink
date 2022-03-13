import React from 'react';

function About() {
  return (
    <div className='w-11/12 mx-auto mt-0 text-blue-950 pt-10'>
      <div>
        <h1 className='text-xl sm:text-2xl font-medium'>
          <span className='border-b-4 border-[#c0cadf]'>What</span> is blink?
        </h1>
        <p className='mt-5 tracking-wide opacity-70 text-lg'>
          Blink is a twist on the classic pomodoro timer that attempts to help its users reduce digital eye strain through timed work sessions.
        </p>
      </div>
      <div className='mt-10'>
        <h1 className='text-xl sm:text-2xl font-medium'>
          <span className='border-b-4 border-[#c0cadf]'>What</span> is eye strain?
        </h1>
        <p className='mt-5 tracking-wide opacity-70 text-lg'>
          Digital eye strain is a group of eye and vision problems. The problems can include eyes that itch and tear, and are dry and red. Your eyes may feel tired or uncomfortable. You may not be able to focus normally. These problems are caused by lots of computer or digital device use.
        </p>

      </div>
      <div className='mt-10'>
        <h1 className='text-xl sm:text-2xl font-medium'>
          <span className='border-b-4 border-[#c0cadf]'>How</span> can I use blink to reduce eye strain?
        </h1>
        <p className='mt-5 tracking-wide opacity-70 text-lg'>
          If you find yourself gazing at screens all day, utilize <span className='font-extrabold'>blink</span> to implment the 20-20-20 rule. Basically, every 20 minutes spent using a screen; you should try to look away at something that is 20 feet away from you for a total of 20 seconds or more.



        </p>
      </div>
    </div>
  );
}

export default React.memo(About);
