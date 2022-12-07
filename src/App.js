import "./App.css";
import FoodComponent from "./component/FoodComponent";
import { useEffect, useState } from "react";
import MenuData from "./component/MenuData";
import PicturePost from "./component/PicturePost";

function App() {
  const [foodData, setFoodData] = useState(MenuData);
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedPicture, setSelectedPicture] = useState(null);
  //dsadasdasd
  // ข้อมูลทั้งหมด 10 รายการ
  //จำนวนรายการแต่ละหน้า
  //จำนวนเลขหน้าแต่ละหน้า
  //14 รายการ 14/7 = 2
  //0 = [0-6], 1 = [7-13]

  const onPictureOpenClick = (thePicture) => {
    setSelectedPicture(thePicture);
  };

  const onPictureCloseClick = () => {
    setSelectedPicture(null);
  };

  const pagination = () => {
    const foodPerPage = 5; //แสดงรายการอาหาร 3 ราการต่อ 1 หน้า

    const pages = Math.ceil(MenuData.length / foodPerPage);
    console.log(MenuData.length);
    console.log("จำนวนเลขหน้า =", pages);

    const newFood = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerPage; // [0,] , [7,]
      return MenuData.slice(start, start + foodPerPage);
    });
    console.log("หน้าที่2", newFood);
    return newFood;
  };

  const handlePage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    const pagecount = pagination();
    setDataInPage(pagecount);
    console.log(pagecount[1]);
    setFoodData(pagecount[page]);
  }, [page]);

  let picturePost = null;
  if (!!selectedPicture) {
    picturePost = (
      <PicturePost data={selectedPicture} onBgClick={onPictureCloseClick} />
    );
    console.log(selectedPicture);
  }

  return (
    <div className="flex flex-col justify-center h-screen text-center text-slate-50 bg-slate-700">
      <h1>FoodCard | Pagination</h1>
      {picturePost}
      <div className="flex flex-wrap justify-center items-center gap-2.5">
        {foodData.map((data, index) => {
          return (
            <FoodComponent
              key={index}
              data={data}
              onConveyorClick={onPictureOpenClick}
            />
          );
        })}
      </div>
      <div className="flex justify-center gap-2.5 ">
        {dataInPage.map((data, index) => {
          return (
            <button
              className="border-solid border-2 border-sky-500 mt-5 w-8 bg-white text-black"
              key={index}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default App;
