import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

function NavBar({ setOpenSetting }) {
  return (
    <nav
      className='flex justify-between pt-5 border-b-neutral-500 border-b-2 w-11/12 mx-auto text-[#E5E5E5]'
      onClick={() => setOpenSetting((value) => !value)}
    >
      <div className=''>
        <h1 className=' text-2xl cursor-pointer py-2 font-bold'>blink</h1>
      </div>
      <IoSettingsOutline className='text-xl cursor-pointer' />
    </nav>
  );
}

export default React.memo(NavBar);
