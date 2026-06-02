import HeroPage from './HeroPage';

const Section1 = () => {
  return (
    <div id='home' className='h-screen relative w-full bg-black text-white snap-start'>
      <div>
        <img className='h-screen  w-1/2 lg:max-w-fit contain absolute right-0' src="/src/assets/me3.jpg" alt="Avi Photo" />
      </div>
      <HeroPage />
    </div>
  )
}

export default Section1
