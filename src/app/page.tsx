'use client';
export default function Home(){
  return <div className="h-screen bg-zinc-950 ">
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
    <div className=" px-14  py-32      sm:px-28 sm:py-44       md:px-28 md:py-44">
      <div className=" space-y-3        sm:space-y-4        md:space-y-4">
      <h2 className=" font-semibold  text-xl  tracking-wide     sm:font-semibold sm:text-3xl sm:tracking-wider        md:font-semibold md:text-3xl md:tracking-wider">Hey, I&apos;m a Front-End <br /> Devolper</h2>
      <p className=" text-xs  text-zinc-400         sm:text-sm sm:text-zinc-400                md:text-sm md:text-zinc-400">Our Landing Page Template Works On All Devices. So You Only Have<br /> To Set It Up Once, And Get Beautiful Results Forever.</p>
      </div>
      <div className=" space-x-2  space-y-4      sm:space-x-6 sm:space-y-4                  md:space-x-6 md:space-y-4">
      <button className= " bg-rose-500  px-4  py-3  text-xs      sm:bg-rose-500 sm:px-11 sm:py-3              uppercase md:bg-rose-500 md:px-11 md:py-3" onClick={() => "mailto@izmarao99@gmail.com"}>Download CV</button>
      <button className=" bg-zinc-700 px-4 py-3 text-xs    sm:bg-zinc-700 sm:px-11 sm:py-3             uppercase md:bg-zinc-700 md:px-16 md:py-3" onClick={() => "mailto@izmarao99@gmail.com"}>Hire Me</button>
      </div>
      
    </div>
</div>
}