import HeroPage from './HeroPage';
import me3Image from '../../assets/me3.jpg';

const Section1 = () => {
  return (
    <div id='home' className='h-screen relative w-full bg-black text-white snap-start'>
      <div>
        <img className='h-screen brightness-[0.95] w-1/2 lg:max-w-fit contain absolute right-0' src={me3Image} alt="Avi Photo" />
      </div>
      <HeroPage />
    </div>
  )
}

export default Section1
