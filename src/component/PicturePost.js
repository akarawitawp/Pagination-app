const PicturePost = (props) => {
  const { data, onBgClick } = props;
  return (
    <div
      className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black-100 z-999 "
      onClick={onBgClick}
    >
      <div className="bg-black-200 absolute left-0 right-0 top-0 bottom-0 z-999 " />
      <div className="relative max-w-[60%] bg-black">
        <img
          className="relative max-w-[80%] ml-auto mr-auto "
          src={data.image_location}
          alt={data.name}
        />
        <div className="text-white text-center">{data.name}</div>
      </div>
    </div>
  );
};
export default PicturePost;
