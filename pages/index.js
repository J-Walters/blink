import NavBar from '../components/NavBar';
import Timer from '../components/Timer';

export default function Home() {
  return (
    <div className='bg-[#3969A0] min-h-screen font-mallanna'>
      <div className='max-w-2xl min-h-screen mx-auto'>
        <NavBar />
        <Timer />
      </div>
    </div>
  );
}
