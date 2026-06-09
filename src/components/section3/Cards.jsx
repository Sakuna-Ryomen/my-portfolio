
const Cards = (props) => {

  // if (props.name === "GitHub") {
  //   return (
  //     <div className='w-50 h-50 bg-gray-100/10 p-8 backdrop-blur-lg rounded-lg flex flex-col items-center hover:scale-110  justify-center gap-4'>
  //       <div style={{}} className='h-22 w-22 bg-white animate-spin [animation-duration:8s] rounded-full  flex items-center justify-center'>
  //       <img className='h-22 w-22 rounded-full' src={props.image} alt="" />
  //       </div>
  //     <h3 className='text-xl font-bold'>{props.name}</h3>
  //   </div>
  //   )
  // }

  return (
    <div className='w-50 h-50 border  border-white/20 bg-gray-100/10 p-8 backdrop-blur-lg rounded-lg flex flex-col items-center hover:-translate-y-2 hover:border-yellow-400/50 transition-all duration-300 hover:scale-110 hover: justify-center gap-4'>
        <div style={{}} className='h-25 w-25 animate-spin [animation-duration:8s]  rounded-full flex items-center justify-center p-2'>
        <img className='h-22 w-22 rounded-full' src={props.image} alt="" />
        </div>
      <h3 className='text-xl font-bold'>{props.name}</h3>
    </div>
  )
}

export default Cards
