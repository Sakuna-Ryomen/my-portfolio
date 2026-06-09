
import LeftContent from './LeftContent';
import RightContent from './RightContent';


const Section2 = () => {
  return (
    <div id='about' className=' h-screen w-full flex justify-around items-center bg-black text-white snap-start'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Section2
