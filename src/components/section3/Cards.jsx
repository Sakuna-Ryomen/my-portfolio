const Cards = (props) => {
  return (
    <div className='skill-card w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 border border-white/15 bg-white/5 p-3 sm:p-5 md:p-6 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-default transition-all duration-300 hover:-translate-y-2 hover:bg-amber-400/8'>
      <div className='animate-spin [animation-duration:10s] rounded-full flex items-center justify-center p-1'>
        <img
          className='h-10 w-10 sm:h-14 sm:w-14 md:h-18 md:w-18 rounded-full object-contain drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]'
          src={props.image}
          alt={props.name}
        />
      </div>
      <h3
        className='text-xs sm:text-sm md:text-base font-semibold text-center text-white/90'
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {props.name}
      </h3>
    </div>
  )
}

export default Cards
