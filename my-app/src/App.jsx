import React, { useState } from 'react'

function App() {

  return (

    <div class="bg-neutral-900 min-h-screen">


      <div className="sticky top-0 bg-neutral-900 border-b-3 border-cyan-600 p-4 z-50 flex flex-row justify-between">
        <div className='flex flex-row justify-around gap-8'>
          <h1 className="text-white">icon</h1>
          <h1 className="text-white">Toon</h1>
        </div>
        <div className='flex flex-row justify-around gap-8'>
          <h1 className="text-white">Profile</h1>
          <h1 className="text-white">Profile</h1>
          <h1 className="text-white">Profile</h1>
          <h1 className="text-white">Profile</h1>
        </div>
      </div>


      <div class="flex flex-col justify-center items-center px-20 py-20">

        <div class="bg-neutral-900 rounded-4xl w-320 h-180 mb-20 flex flex-row justify-center items-center">
          <img class="mr-60 w-auto h-100 border-4 border-cyan-600 rounded-4xl" src="abc.png" alt="img" />
          <div class="text-white text-2xl">
            Name : Phacharaphol Phinitkit <br /><br /> Nickname : Toon <br /><br /> Age : 18 <br /><br /> School : Ratwinit Bangkeao <br /><br /> Hobby : Coding , Listen music
          </div>
        </div>

        <div class="bg-neutral-800 rounded-4xl w-320 h-180 shadow-2xl mb-20">
        </div>

        <div class="bg-neutral-900 rounded-4xl w-320 h-180 mb-20 flex flex-col justify-center items-center">
          <div>
            <h1 class="text-6xl text-white mb-20">My Skills</h1>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-white w-300 h-140">

            <div className="relative group bg-neutral-700 p-4 rounded-xl text-center text-2xl overflow-hidden">
              <img className="w-auto h-30 mx-auto mb-10 mt-5" src="html.png" alt="HTML" />
              <h1>HTML</h1>

              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-10 py-10 cursor-pointer">
                <p className="text-white text-1xl text-center mb-7">HTML เป็นสิ่งแรกที่ผมศึกษาและยังเป็นพื้นฐานของการสร้างเว็บไซต์นึงขึ้นมาครับ</p>
                <p className="text-amber-300 text-2xl text-center mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-5 mb-3">
                  <div className="bg-cyan-600 h-full w-9/10 rounded-full"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-xs font-semibold">90%</span>
                </div>
              </div>
            </div>

            <div className="relative group bg-neutral-700 p-4 rounded-xl text-center text-2xl overflow-hidden">
              <img class="w-auto h-30 mx-auto mb-10 mt-5" src="tw.png" alt="TAILWIND" />
              <h1>TAILWIND</h1>

              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-10 py-10 cursor-pointer">
                <p className="text-white text-1xl text-center mb-7">HTML เป็นสิ่งแรกที่ผมศึกษาและยังเป็นพื้นฐานของการสร้างเว็บไซต์นึงขึ้นมาครับ</p>
                <p className="text-amber-300 text-2xl text-center mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-5 mb-3">
                  <div className="bg-cyan-600 h-full w-9/10 rounded-full"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-xs font-semibold">90%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-4 rounded-xl text-center text-2xl overflow-hidden">
              <img class="w-auto h-30 mx-auto mb-10 mt-5" src="React.png" alt="REACT" />
              <h1>REACT</h1>

              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-10 py-10 cursor-pointer">
                <p className="text-white text-1xl text-center mb-7">HTML เป็นสิ่งแรกที่ผมศึกษาและยังเป็นพื้นฐานของการสร้างเว็บไซต์นึงขึ้นมาครับ</p>
                <p className="text-amber-300 text-2xl text-center mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-5 mb-3">
                  <div className="bg-cyan-600 h-full w-9/10 rounded-full"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-xs font-semibold">90%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-4 rounded-xl text-center text-2xl overflow-hidden">
              <img class="w-auto h-30 mx-auto mb-10 mt-5" src="js.png" alt="JAVA SCRIPT" />
              <h1>JAVA SCRIPT</h1>

              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-10 py-10 cursor-pointer">
                <p className="text-white text-1xl text-center mb-7">HTML เป็นสิ่งแรกที่ผมศึกษาและยังเป็นพื้นฐานของการสร้างเว็บไซต์นึงขึ้นมาครับ</p>
                <p className="text-amber-300 text-2xl text-center mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-5 mb-3">
                  <div className="bg-cyan-600 h-full w-9/10 rounded-full"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-xs font-semibold">90%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-4 rounded-xl text-center text-2xl overflow-hidden">
              <img class="w-auto h-30 mx-auto mb-10 mt-5" src="C.png" alt="C + +" />
              <h1>C + +</h1>

              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-10 py-10 cursor-pointer">
                <p className="text-white text-1xl text-center mb-7">HTML เป็นสิ่งแรกที่ผมศึกษาและยังเป็นพื้นฐานของการสร้างเว็บไซต์นึงขึ้นมาครับ</p>
                <p className="text-amber-300 text-2xl text-center mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-5 mb-3">
                  <div className="bg-cyan-600 h-full w-9/10 rounded-full"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-xs font-semibold">90%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-4 rounded-xl text-center text-2xl overflow-hidden">
              <img class="w-auto h-30 mx-auto mb-10 mt-5" src="python.png" alt="PYTHON" />
              <h1>PYTHON</h1>

              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-10 py-10 cursor-pointer">
                <p className="text-white text-1xl text-center mb-7">HTML เป็นสิ่งแรกที่ผมศึกษาและยังเป็นพื้นฐานของการสร้างเว็บไซต์นึงขึ้นมาครับ</p>
                <p className="text-amber-300 text-2xl text-center mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-5 mb-3">
                  <div className="bg-cyan-600 h-full w-9/10 rounded-full"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-xs font-semibold">90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-neutral-900 rounded-4xl w-320 h-240 mb-20 flex flex-col items-center">
          <h1 class="text-6xl text-white mb-20 mt-15">My Skills</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-white w-300 h-140 mt-5'>

            <div className='border-cyan-300 border-dashed border-4 rounded-2xl'>
              <div>
                <img src="js.png" alt="" />
                <h1 className='text-3xl ml-3 mr-3'>สวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับ</h1>
              </div>
            </div>
            <div className='border-cyan-300 border-dashed border-4 rounded-2xl'>
              <div>
                <img src="js.png" alt="" />
                <h1 className='text-3xl ml-3 mr-3'>สวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับ</h1>
              </div>
            </div>
            <div className='border-cyan-300 border-dashed border-4 rounded-2xl'>
              <div>
                <img src="js.png" alt="" />
                <h1 className='text-3xl ml-3 mr-3'>สวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับ</h1>
              </div>
            </div>

          </div>

          <div>
            <button className='bg-white w-100 h-20 mt-20 cursor-pointer rounded-3xl border-10 border-cyan-300 border-double text-3xl'>More!!</button>
          </div>

        </div>


        <div class="bg-neutral-900 rounded-4xl w-320 h-180 mb-20 flex flex-col items-center">
          <div className='mb-25 mt-15 text-white text-center'>
            <h1 className='text-6xl'>Contact</h1>
            <p className='text-3xl mt-5'>contact me!</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 text-white w-300 h-140 mt-5'>
            <div className='flex flex-col items-center h-55'>
              <h1 className='text-center text-4xl'>Social</h1>
              <div className='text-left'>
                <p className='text-xl mt-10'>Facebook : Phacharaphol Phinitkit</p>
                <p className='text-xl mt-10'>instagram : pc0rqnkz</p>
              </div>
            </div>
            
            
            <div className='flex flex-col items-center border-l-2 h-55'>
              <h1 className='text-center text-4xl'>Social</h1>
              <div className='text-left'>
                <p className='text-xl mt-10'>Facebook : Phacharaphol Phinitkit</p>
                <p className='text-xl mt-10'>instagram : pc0rqnkz</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>


  )
}

export default App