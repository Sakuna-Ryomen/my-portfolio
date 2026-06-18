import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Section2 = () => {
  return (
    <div id='about' className='relative min-h-screen w-full flex flex-col md:flex-row justify-around items-center bg-black text-white snap-start py-20 md:py-0 overflow-y-auto'>
      <div className="section-accent-top" />
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Section2
