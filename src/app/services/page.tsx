'use client';

export default function Services(){
    return (
        <div className="h-screen bg-zinc-900 ">
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



    {/* services start */}
    <div>
    <div>
     
        <h1 className="text-rose-600 uppercase    lg:text-2xl lg:font-bold lg:mb-4 lg:mt-8 lg:ml-16       md:text-xl md:font-bold md:mb-4 md:mt-8 md:ml-16    sm:text-2xl sm:font-semibold sm:mb-4 sm:mt-8 sm:ml-16       text-2xl   font-semibold   mb-4   mt-8   ml-16       text-2xl font-semibold mb-4 mt-8 ml-16">Services</h1>
      </div>
    <div className="bg-black flex  lg:ml-16 g:mr-16    md:ml-16 md:mr-16   sm:ml-12 sm:mr-12  ml-10 mr-10">
      
      {/*  */}
      <div className="lg:gap-8 lg:grid lg:grid-cols-2 lg:m-12   md:gap-8 md:grid md:grid-cols-2 md:m-12  sm:gap-8 sm:grid sm:grid-cols-1 sm:m-12         gap-6   grid   grid-cols-1   m-8       ">
      <div>
      <img height="60" width="50" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfr_xUS6QcDyUjdeECIhTGXsTam_GxGZQVp3TO9_Yp5maRIFD9" alt="" />
        <h1 className="text-rose-500 text-xl">Front-end</h1>
        <p className="lg:text-lg md:text-lg text-zinc-300  sm:text-xs      text-xs">
        At different stages of your life you have a unique set of concerns,& we 
        understand you. We provide professional advice based on sound financial 
        planing room, as well as our extensive working relationship with tens of 
        thousands of families. 
        </p>
      </div>
      {/*  */}
      {/*  */}
      <div>
        <img height="50" width="40" src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-5-gear-or-cog-vector-icon-png-image_1903666.jpg" alt="" />
        <h1 className="text-rose-500 text-xl">Back-end</h1>
        <p className="lg:text-lg md:text-lg text-zinc-300 sm:text-xs      text-xs">
        At different stages of your life you have a unique set of
         concerns,& we understand you. We provide professional 
         advice based on sound financial planing room, as well
          as our extensive working relationship with tens of  
          thousands of families.
        </p>
      </div>
      {/*  */}
      {/*  */}
      <div className="items-center ">
      <img height="50" width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwTpMl6_r7HeE7Sl_GUCgXSYTr8qFkeB-_n_1CPCK1rUULsTcd4uQs9_hAuHHzuXM6j8&usqp=CAU" alt="" />
        <h1 className="  text-rose-500 text-xl">Graphic Desiginng</h1>
        <p className="lg:text-lg md:text-lg text-zinc-300    sm:text-xs      text-xs">
        At different stages of your life you have a unique set of concerns,& we 
        understand you. We provide professional advice based on sound financial 
        planing room, as well as our extensive working relationship with tens of 
        thousands of families. 
        </p>
      </div>
      {/*  */}
      </div>
      <div>
        
      </div>
    </div>
    </div>
{/* navdiv */}
    </div>
    )
}

