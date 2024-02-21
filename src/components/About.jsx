
function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-darker-grotesque font-semibold tracking-tight text-[4vw] mb-[3vw] leading-[4vw]">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#90a155]">
        <div className="w-1/2">
            <h1 className="text-7xl">Our approach:</h1>
            <button className="uppercase hover:bg-zinc-400 hover:text-blue-950 px-10 py-6 flex gap-10 items-center bg-zinc-900 mt-9 rounded-full text-white">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#aebb7f]"></div>
      </div>
    </div>
  )
}

export default About
