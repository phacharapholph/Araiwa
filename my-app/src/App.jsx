import React, { useState } from 'react'

function App() {

    const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (

    <div class="bg-neutral-900 min-h-screen">


      <div className="sticky top-0 bg-neutral-900 border-b-3 border-cyan-600 p-4 z-50 flex flex-row justify-between">
        <div className='flex flex-row justify-around gap-8'>
          <button className="text-white hover:text-cyan-400 cursor-pointer" onClick={() => goTo("home")}>Toon</button>
          <a href="https://www.facebook.com/phacharaphol.phinitkit/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-amber-50 hover:text-cyan-400 inline-flex"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" className="cursor-pointer transition-colors"><path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path></svg></a>
          <a href="https://www.instagram.com/pc0rqnkz/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-amber-50 hover:text-cyan-400 inline-flex"><svg className='text-amber-50 hover:text-cyan-400 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path></svg></a>
        </div>
        <div className='flex flex-row justify-around gap-8'>
          <button className="text-white hover:text-cyan-400 cursor-pointer" onClick={() => goTo("profile")}>Profile</button>
          <button className="text-white hover:text-cyan-400 cursor-pointer" onClick={() => goTo("about")}>About Me</button>
          <button className="text-white hover:text-cyan-400 cursor-pointer" onClick={() => goTo("skills")}>Skills</button>
          <button className="text-white hover:text-cyan-400 cursor-pointer" onClick={() => goTo("project")}>Project</button>
          <button className="text-white hover:text-cyan-400 cursor-pointer" onClick={() => goTo("contact")}>Contact</button>
        </div>
      </div>


      <div class="flex flex-col justify-center items-center px-20 py-20">

        <div id="home" class="bg-neutral-900 rounded-4xl w-320 h-180 mb-20 flex flex-col justify-center items-center scroll-mt-[150px]">
          <h1 className='text-white text-8xl'>Welcome to my website!</h1>
          <p className='text-white text-6xl mt-10'>Welcome to my website!</p>
        </div>

        <div id="profile" class="bg-neutral-900 rounded-4xl w-320 h-180 mb-20 flex flex-row justify-center items-center scroll-mt-[150px]">
          <img class="mr-60 w-auto h-100 border-4 border-cyan-600 rounded-4xl" src="abc.png" alt="img" />
          <div class="text-white text-2xl">
            Name : Phacharaphol Phinitkit <br /><br /> Nickname : Toon <br /><br /> Age : 18 <br /><br /> School : Ratwinit Bangkeao <br /><br /> Hobby : Coding , Listen music
          </div>
        </div>

        <div id="about" className="bg-neutral-900 rounded-4xl w-320 h-180 mb-20 p-5 flex flex-col scroll-mt-[150px]">

          <div className="text-left text-white mb-5">
            <h1 className="text-6xl">About me</h1>
            <p className="text-4xl">เกี่ยวกับผม</p>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <p className="text-white text-4xl text-center w-200 break-words">
              สวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับสวัสดีครับ
            </p>
          </div>
        </div>


        <div id="skills" class="bg-neutral-900 rounded-4xl w-320 h-180 mb-20 flex flex-col justify-center items-center scroll-mt-[150px]">
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

        <div id="project" class="bg-neutral-900 rounded-4xl w-320 h-240 mb-20 flex flex-col items-center scroll-mt-[80px]">
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


        <div id="contact" class="bg-neutral-900 rounded-4xl w-320 h-180 mb-20 flex flex-col items-center scroll-mt-[150px]">
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