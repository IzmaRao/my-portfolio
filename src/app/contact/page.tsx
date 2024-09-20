'use client';
export default function Contact(){
    return (
        <div className="h-screen bg-zinc-950 ">
    <div>
    <nav className="md:z-auto md:static w-full left-0       text-center space-x-2 pl-4 pt-4 pb-4        sm:text-center sm:space-x-4 sm:pl-6 sm:pt-6       md:text-center md:space-x-4 md:pl-6 md:pt-6">
      <h3 className="text-rose-500 float-left     sm:text-rose-500 sm:float-left sm:text-xl      md:text-rose-500 md:float-left md:text-xl">Izma</h3>
      <a className="hover:text-rose-500 transition duration-600 lg:text-base md:text-base sm:text-sm text-sm"  href="./">home</a>
      <a className="hover:text-rose-500 transition duration-600 lg:text-base md:text-base sm:text-sm text-sm"  href="./introduction/">Introduction</a>
      <a className="hover:text-rose-500 transition duration-600 lg:text-base md:text-base sm:text-sm text-sm"  href="./contact/">Contact</a>
      <a className="hover:text-rose-500 transition duration-600 lg:text-base md:text-base sm:text-sm text-sm"  href="./skills/">Skills</a>
      <a className="hover:text-rose-500 transition duration-600 lg:text-base md:text-base sm:text-sm text-sm"  href="./services/">Services</a>
      {/* <button className="text-rose-500 float-right pr-6    hidden      sm:text-rose-500 sm:float-right sm:pr-6     md:text-rose-500 md:float-right md:pr-6" onClick={() => "mailto@izmarao99@gmail.com"}>Hire Me</button> */}
    </nav>
    </div>
    {/* nav ended */}
    <div className="content  pt-48">
        <div className="">
          <center>
            <p className="text-white lg:text-2xl lg:font-bold lg:mb-6       md:text-2xl md:mb-6 md:font-bold    sm:text-xl sm:mb-6 sm:font-bold        text-lg   mb-6   font-semibold text-lg mb-6 font-semibold ">Let Me Get You A Beautiful Website.</p>
            <button className="  py-1   px-2   font-semibold  bg-[#ea1538] text-white border-2 border-transparent font-bold py-1 px-4 rounded-xl transition duration-400 hover:bg-transparent hover:border-[#ea1538] cursor-pointer" onClick={() => "mailto@izmarao99@gmail.com"}>Hire Me</button>
          </center>
        </div>
        </div>
    </div>
    )
}