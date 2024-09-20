'use client'
export default function Home() {
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
      <div className="h-screen bg-zinc-900 text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-4 ">MY SKILLS</h1>
            <h1 className="text-2xl font-semibold mb-4 text-rose-600">My Expertise</h1>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">HTML</span>
                <span className="text-sm font-medium text-white">96%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-rose-300 h-2.5 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">CSS</span>
                <span className="text-sm font-medium text-white">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-rose-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">JavaScript</span>
                <span className="text-sm font-medium text-white">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-rose-300 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            {/*  */}
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">typescript</span>
                <span className="text-sm font-medium text-white">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dar/k:bg-gray-700">
                <div className="bg-rose-400 h-2.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            {/*  */}
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">Tailwind Css</span>
                <span className="text-sm font-medium text-white">86%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-rose-300 h-2.5 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>
            {/*  */}
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">JNext js</span>
                <span className="text-sm font-medium text-white">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-rose-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  