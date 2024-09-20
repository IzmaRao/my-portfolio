"use client";
export default function Introduction() {
  return (
    <div className="h-screen bg-zinc-950  ">
      <div className="">
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
      <div className="lg:mt-14 lg:ml-20 lg:mr-20    md:mt-14 md:ml-20 md:mr-20     sm:mt-8 sm:ml-14 sm:mr-14            mt-8   ml-14   mr-14      mt-10 ml-16 mr-16 ">
        <div><h1 className="lg:pb-4 lg:text-rose-600 lg:text-2xl        md:pb-4 md:text-rose-600 md:text-2xl   sm:pb-4 sm:text-rose-600 sm:text-xl        pb-2   text-rose-600   text-lg                      uppercase font-bold">Introduction</h1><div>

            <div className="bg-black         lg:grid-cols-2 lg:flex  lg:gap-4 lg:p-14     md:grid-cols-2 md:flex  md:gap-6 md:p-14  sm:grid-cols-2  sm:gap-4 sm:p-12      grid-cols-2    gap-4   p-8 text-xs     ">
              
              <img height='300' width='250'
                src="https://www.shutterstock.com/image-vector/anime-girl-drawing-picture-vector-600nw-2283659223.jpg"
                alt=""
              />
              <div>
              <h2 className=" pt-2 pb-2 text-2xl text-rose-500">About Me</h2>
              <p className=" text-zinc-400 lg:text-lg md:text-sm sm:text-xs   text-xs ">
                Hello! My name is Izma, and I am a 16-year-old web developer
                with a passion for creating responsive and interactive websites.
                I have expertise in HTML, CSS, Next.js, Tailwind CSS, and
                TypeScript/JavaScript. My goal is to design websites that are
                not only visually appealing but also highly functional and
                user-friendly. I enjoy bringing creative ideas to life through
                code and continuously strive to improve my skills and stay
                updated with the latest web development trends.
              </p>
              </div>
              {/*  */}
            </div>
            {/*  */}
            <div className="pb-14">
            <div className="bg-black         lg:grid-cols-1 lg:flex  lg:gap-6 lg:p-14     md:grid-cols-1 md:flex  md:gap-6 md:p-14  sm:grid-cols-1  sm:gap-6 sm:p-14      grid-cols-1    gap-2   p-8 ">
              <div>
              <h2 className=" pt-2 pb-2 text-2xl text-rose-500">Education</h2>
              <p className=" text-zinc-400 lg:text-lg md:text-sm sm:text-xs   text-xs ">
                I began my educational journey at The Educator 
                School, where I studied from 3rd to 8th grade. After
                 completing my middle school education, I moved on 
                 to Allied School for my 9th grade, where I 
                 successfully completed my matriculation. Currently,
                  I am in 11th grade, continuing my studies at 
                  college. Alongside my formal education, I am also
                   pursuing a Certified Cloud Applied Generative AI 
                   Engineer (GenEng) course. I am studying AI early 
                   because my ambition is to become a Data Scientist 
                   or achieve something special in the field of AI. 
                   This progression has provided me with a solid 
                   foundation and diverse learning experiences, 
                   preparing me for future academic challenges.

                </p>
                </div>
              </div>
              </div>
              {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
