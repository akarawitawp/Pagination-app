const FoodComponent = (props) => {
  const { data, onConveyorClick } = props;
  return (
    <div className="ml-8 mr-8 p-8 w-64 h-64  text-yellow-500  bg-white cursor-pointer rounded-lg ">
      <div className="h-full w-full object-cover">
        <img
          src={data.image_location}
          alt={data.name}
          onClick={() => onConveyorClick(data)}
        />
        <div className="text-lg text-center m-7">{data.name}</div>
      </div>
    </div>
  );
};
export default FoodComponent;
