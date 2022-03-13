import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

function NavBar({ setOpenSetting }) {
  return (
    <nav
      className='flex justify-between pt-5 border-b-[#6d6d6d] border-opacity-30 border-b-2 w-11/12 mx-auto text-neutral-200'
      onClick={() => setOpenSetting((value) => !value)}
    >
      <div className=''>
        <h1 className=' text-4xl cursor-pointer py-2 font-bold'>blink</h1>
      </div>
      <IoSettingsOutline className='text-2xl cursor-pointer' />
    </nav>
  );
}

export default React.memo(NavBar);
