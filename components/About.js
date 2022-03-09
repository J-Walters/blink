import React from 'react';

function About() {
  return (
    <div className='w-11/12 mx-auto mt-0 text-[#3969A0] pt-10'>
      <div>
        <h1 className='text-xl sm:text-2xl font-medium'>
          <span className='border-b-4 border-blue-200'>What</span> is blink?
        </h1>
        <p className='mt-5 tracking-wide opacity-70 text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit
          amet tellus cras adipiscing enim eu. In arcu cursus euismod quis
          viverra. Sit amet est placerat in egestas erat. Adipiscing elit
          pellentesque habitant morbi tristique senectus et netus et.
        </p>
      </div>
      <div className='mt-5'>
        <h1 className='text-xl sm:text-2xl font-medium'>
          <span className='border-b-4 border-blue-200'>Augue</span> interdum
          velit euismod in?
        </h1>
        <p className='mt-5 tracking-wide opacity-70 text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut{' '}
          <a href='www.google.com' target='_blank' className='underline'>
            labore et dolore
          </a>{' '}
          magna aliqua. Eget sit amet tellus cras adipiscing enim eu. In arcu
          cursus euismod quis viverra. Sit amet est placerat in egestas erat.
          Adipiscing elit pellentesque habitant morbi tristique senectus et
          netus et.
        </p>
      </div>
    </div>
  );
}

export default React.memo(About);
