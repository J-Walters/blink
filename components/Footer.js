import { TiHeartFullOutline } from 'react-icons/ti';
const Footer = () => {
  return (
    <div className='flex justify-center border-t-[#3969A0] border-t-2'>
      <div className='flex p-5 text-[#3969A0]'>
        <p>{`Made with ${'  '}`}</p>
        <TiHeartFullOutline className='text-red-700' />
        <p>
          by{' '}
          <a
            href='https://github.com/J-Walters/blink'
            className='font-bold cursor pointer'
          >
            Jordan Walters
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
