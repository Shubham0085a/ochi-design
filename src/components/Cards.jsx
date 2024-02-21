function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full h-screen bg-zinc-600 flex items-center px-32 gap-5"
    >
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative rounded-xl flex items-center justify-center w-full h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 text-[#CDEA68] border-[#CDEA68] left-10 bottom-10">
            &copy;2019-2020
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative rounded-xl flex items-center justify-center w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 cursor-pointer hover:bg-slate-200 hover:text-zinc-900 transition ease-in-out duration-700 rounded-full border-2 border-gray-500 text-gray-200 left-10 uppercase bottom-10 ">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-5 py-1 cursor-pointer hover:bg-slate-200 hover:text-zinc-900 transition ease-in-out duration-700 rounded-full border-2 border-gray-500 text-gray-200 left-10 uppercase  bottom-10">
            Business Bootcamo Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
