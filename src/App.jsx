import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import NavBar from './components/section1/NavBar';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';

const App = () => {
  return (
    <div className='h-screen w-full relative overflow-y-scroll scrollbar-thin scroll-smooth scrollbar-thumb-amber-400 scrollbar-track-black snap-y snap-mandatory'>
      <div className='fixed w-full top-0 left-0 z-50'>
        <NavBar />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default App
