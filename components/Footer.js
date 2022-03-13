import { TiHeartFullOutline } from 'react-icons/ti';
const Footer = () => {
  return (
    <div className='flex justify-center border-t-blue-950 border-t-2'>
      <div className='flex p-5 text-blue-950'>
        <p>Made with </p>
        <TiHeartFullOutline className='text-red-700' />
        <p>
          by{' '}
          <a
            href='https://github.com/J-Walters/blink'
            className='font-bold cursor pointer underline'
          >
            Jordan Walters
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
