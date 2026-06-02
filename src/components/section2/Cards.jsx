

const Cards = (props) => {

  // const idx = props.index;

  // function getArrow() {
  //   if (idx >= 1) {
  //     return <MoveRight className="text-amber-400" />;
  //   }
  // }

  return (
    <div className="flex items-center gap-2">
      {/* {getArrow()} */}
      <div
        className="bg-white/10 backdrop-blur-sm border  border-gray-400 rounded-lg p-4 m-2"
        >
        <h3 className="text-lg font-semibold">{props.title}</h3>
      </div>
    </div>
  );
};

export default Cards;
