

const Cards = (props) => {

  // const idx = props.index;

  // function getArrow() {
  //   if (idx >= 1) {
  //     return <MoveRight className="text-amber-400" />;
  //   }
  // }

  return (
    <div className="h-fit w-fit flex items-center gap-2">
      {/* {getArrow()} */}
      <div
        className="h-full w-full bg-white/10 backdrop-blur-sm border flex flex-row gap-2 hover:scale-105 hover:bg-white/10 transition-all duration-300 items-center border-gray-400 rounded-lg p-2 m-2"
        >
          {props.icon}
        <h3 className="text-lg font-semibold">{props.title}</h3>
      </div>
    </div>
  );
};

export default Cards;
