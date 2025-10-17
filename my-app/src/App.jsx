import React from "react";

function App() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-neutral-900 min-h-screen">

      <div className="sticky top-0 bg-neutral-900 border-b-2 border-cyan-600 px-4 py-3 z-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="text-white text-lg md:text-xl hover:text-cyan-400"
            onClick={() => goTo("home")}
          >
            Toon
          </button>


          <a
            href="https://www.facebook.com/phacharaphol.phinitkit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-amber-50 hover:text-cyan-400 inline-flex"
          >
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 50 50">
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/pc0rqnkz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-amber-50 hover:text-cyan-400 inline-flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="22" height="22" viewBox="0 0 50 50">
              <path d="M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16C47 8.832 41.168 3 34 3H16zm21 8a2 2 0 110 4 2 2 0 010-4zM25 14c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11z"></path>
            </svg>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <button className="text-white hover:text-cyan-400" onClick={() => goTo("profile")}>Profile</button>
          <button className="text-white hover:text-cyan-400" onClick={() => goTo("about")}>About Me</button>
          <button className="text-white hover:text-cyan-400" onClick={() => goTo("skills")}>Skills</button>
          <button className="text-white hover:text-cyan-400" onClick={() => goTo("project")}>Project</button>
          <button className="text-white hover:text-cyan-400" onClick={() => goTo("contact")}>Contact</button>
        </div>
      </div>


      <div className="flex flex-col items-center px-4 md:px-20 py-10 md:py-16 space-y-16 md:space-y-20">

        <section
          id="home"
          className="w-full max-w-7xl bg-neutral-900 rounded-3xl min-h-[12rem] md:min-h-[18rem] flex flex-col items-center justify-center text-center scroll-mt-[120px]"
        >
          <h1 className="text-white text-4xl md:text-7xl">Welcome to my website!</h1>
          <p className="text-white text-2xl md:text-5xl mt-4 md:mt-6">Phacharaphol Phinitkit</p>
        </section>


        <section
          id="profile"
          className="w-full bg-neutral-900 rounded-4xl mb-20 scroll-mt-[150px]"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-12">
              <img
                className="w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-cyan-600 rounded-3xl"
                src="Toon.jpg"
                alt="img"
              />
              <div className="text-white text-xl md:text-2xl leading-relaxed text-center md:text-left">
                Name : Phacharaphol Phinitkit <br /><br />
                Nickname : Toon <br /><br />
                Age : 18 <br /><br />
                School : Ratwinit Bangkeao <br /><br />
                Hobby : Coding , Listen music
              </div>
            </div>
          </div>
        </section>


        <section
          id="about"
          className="w-full max-w-7xl bg-neutral-900 rounded-3xl p-4 md:p-6 flex flex-col scroll-mt-[120px]"
        >
          <div className="text-left text-white mb-3 md:mb-5">
            <h1 className="text-3xl md:text-6xl">About me</h1>
            <p className="text-xl md:text-3xl">เกี่ยวกับผม</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-white text-base md:text-2xl leading-relaxed tracking-wide text-justify max-w-[700px] space-y-4">
              <p>
                สวัสดีครับผมชื่อตูนผมเป็นคนที่ชอบลองทำสิ่งใหม่ ๆ โดยเฉพาะอะไรที่เกี่ยวกับเทคโนโลยี ตั้งแต่การเขียนโปรแกรม
                ออกแบบเว็บไปจนถึงการต่อวงจรเล็ก ๆ เพื่อให้ของที่อยู่เฉย ๆ มันขยับได้ ผมเริ่มสนใจคอมตั้งแต่เด็กเพราะชอบดูคลิปประกอบคอมกับคลิปสอนสร้างเกมในยูทูบ
                ตอนนั้นยังไม่เข้าใจเท่าไหร่แต่รู้แค่ว่ามันเท่ดีที่คนสามารถสร้างสิ่งหนึ่งขึ้นมาด้วยคอมพิวเตอร์ได้เอง
              </p>
              <p>
                หลังจากนั้นก็เริ่มลองเขียนโค้ดลองผิดลองถูกไปเรื่อย ๆ จนได้รู้ว่าความสนุกของมันคือการได้แก้ปัญหาทีละขั้นจนกว่าทุกอย่างจะทำงานได้
                ช่วงหลัง ๆ ผมเริ่มสนใจด้านฮาร์ดแวร์มากขึ้นเพราะมันจับต้องได้จริง ผมชอบเวลาที่เห็นสิ่งที่ตัวเองเขียนโค้ดหรือประกอบไว้ทำงานขึ้นมา
                เช่นตอนทำรถบังคับ IoT ที่ผมเขียนโค้ดเองแล้วเห็นมันเคลื่อนไหวตามคำสั่งบนมือถือมันเป็นความรู้สึกที่ดีมากครับ
              </p>
            </div>
          </div>
        </section>


        <section
          id="skills"
          className="w-full max-w-7xl bg-neutral-900 rounded-3xl flex flex-col items-center py-8 md:py-10 scroll-mt-[120px]"
        >
          <div>
            <h1 className="text-4xl md:text-6xl text-white mb-8 md:mb-10 text-center">My Skills</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 text-white w-full">
 

            <div className="relative group bg-neutral-700 p-3 md:p-4 rounded-xl text-center text-lg md:text-2xl overflow-hidden">
              <img className="w-auto h-20 md:h-30 mx-auto mb-6 md:mb-10 mt-3 md:mt-5" src="html.png" alt="HTML" />
              <h1>HTML</h1>
              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-6 md:px-10 py-6 md:py-10 cursor-pointer">
                <p className="text-white text-center mb-5 md:mb-7">
                  HTML เป็นสิ่งแรกที่ผมศึกษาและยังเป็นพื้นฐานของการสร้างเว็บไซต์นึงขึ้นมาครับ
                </p>
                <p className="text-amber-300 text-xl md:text-2xl text-center mb-2 md:mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-4 md:h-5 mb-2 md:mb-3">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "90%" }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-[10px] md:text-xs font-semibold">90%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-3 md:p-4 rounded-xl text-center text-lg md:text-2xl overflow-hidden">
              <img className="w-auto h-20 md:h-30 mx-auto mb-6 md:mb-10 mt-3 md:mt-5" src="tw.png" alt="TAILWIND" />
              <h1>TAILWIND</h1>
              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-6 md:px-10 py-6 md:py-10 cursor-pointer">
                <p className="text-white text-center mb-5 md:mb-7">
                  Tailwind เป็น Framework ที่ผมชอบมาก เพราะช่วยให้ผมจัดหน้าเว็บได้เร็วขึ้นและออกแบบได้ตามใจโดยไม่ต้องเขียน CSS เยอะครับ
                </p>
                <p className="text-amber-300 text-xl md:text-2xl text-center mb-2 md:mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-4 md:h-5 mb-2 md:mb-3">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "80%" }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-[10px] md:text-xs font-semibold">80%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-3 md:p-4 rounded-xl text-center text-lg md:text-2xl overflow-hidden">
              <img className="w-auto h-20 md:h-30 mx-auto mb-6 md:mb-10 mt-3 md:mt-5" src="React.png" alt="REACT" />
              <h1>REACT</h1>
              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-6 md:px-10 py-6 md:py-10 cursor-pointer">
                <p className="text-white text-center mb-5 md:mb-7">
                  React คือสิ่งที่ทำให้ผมทำเว็บได้ไวมากขึ้น ทำอะไรได้เยอะขึ้น มีฟังก์ชันที่น่าสนใจเยอะครับ
                </p>
                <p className="text-amber-300 text-xl md:text-2xl text-center mb-2 md:mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-4 md:h-5 mb-2 md:mb-3">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "50%" }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-[10px] md:text-xs font-semibold">50%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-3 md:p-4 rounded-xl text-center text-lg md:text-2xl overflow-hidden">
              <img className="w-auto h-20 md:h-30 mx-auto mb-6 md:mb-10 mt-3 md:mt-5" src="js.png" alt="JAVA SCRIPT" />
              <h1>JAVA SCRIPT</h1>
              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-6 md:px-10 py-6 md:py-10 cursor-pointer">
                <p className="text-white text-center mb-5 md:mb-7">
                  JavaScript เป็นภาษาที่ทำให้เว็บไซต์มีชีวิต เพิ่มฟังก์ชัน ปุ่มกด คำนวณ และเชื่อมต่อ API
                </p>
                <p className="text-amber-300 text-xl md:text-2xl text-center mb-2 md:mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-4 md:h-5 mb-2 md:mb-3">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "40%" }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-[10px] md:text-xs font-semibold">40%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-3 md:p-4 rounded-xl text-center text-lg md:text-2xl overflow-hidden">
              <img className="w-auto h-20 md:h-30 mx-auto mb-6 md:mb-10 mt-3 md:mt-5" src="C.png" alt="C++" />
              <h1>C + +</h1>
              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-6 md:px-10 py-6 md:py-10 cursor-pointer">
                <p className="text-white text-center mb-5 md:mb-7">
                  C++ ทำให้เข้าใจพื้นฐานตรรกะและงานระบบ/IoT ได้ดีขึ้น
                </p>
                <p className="text-amber-300 text-xl md:text-2xl text-center mb-2 md:mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-4 md:h-5 mb-2 md:mb-3">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "70%" }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-[10px] md:text-xs font-semibold">70%</span>
                </div>
              </div>
            </div>


            <div className="relative group bg-neutral-700 p-3 md:p-4 rounded-xl text-center text-lg md:text-2xl overflow-hidden">
              <img className="w-auto h-20 md:h-30 mx-auto mb-6 md:mb-10 mt-3 md:mt-5" src="python.png" alt="PYTHON" />
              <h1>PYTHON</h1>
              <div className="absolute inset-0 bg-neutral-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-sm px-6 md:px-10 py-6 md:py-10 cursor-pointer">
                <p className="text-white text-center mb-5 md:mb-7">
                  Python เขียน/อ่านง่าย ใช้ทำโปรแกรมเล็ก ๆ และทดลองงาน IoT
                </p>
                <p className="text-amber-300 text-xl md:text-2xl text-center mb-2 md:mb-3">Experience</p>
                <div className="w-full relative bg-gray-400 rounded-full h-4 md:h-5 mb-2 md:mb-3">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "80%" }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-amber-300 text-[10px] md:text-xs font-semibold">80%</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="project" className="w-full max-w-7xl bg-neutral-900 rounded-3xl flex flex-col items-center scroll-mt-[100px]">
          <h1 className="text-4xl md:text-6xl text-white mb-8 md:mb-12 mt-4">My Project</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-white w-full">
            <article className="border-cyan-300 border-dashed border-4 rounded-2xl overflow-hidden">
              <figure className="aspect-[4/3] overflow-hidden">
                <img src="IMG_8889.png" alt="Smart Pot with micro:bit" className="w-full h-full object-cover" />
              </figure>
              <div className="p-4 md:p-5">
                <h3 className="text-xl md:text-2xl font-semibold">Smart Pot (micro:bit)</h3>
                <p className="mt-2 text-neutral-300 leading-relaxed text-sm md:text-base">
                  ผมพัฒนากระถางต้นไม้อัจฉริยะด้วย micro:bit ตรวจระดับแสง/ความชื้น แสดง “Light/Water” และไอคอนหน้ายิ้มเมื่อสภาพเหมาะสม
                </p>
              </div>
            </article>

            <article className="border-cyan-300 border-dashed border-4 rounded-2xl overflow-hidden">
              <figure className="aspect-[4/3] overflow-hidden">
                <img src="ro.jpg" alt="IoT RC Car (ESP32 + Blynk)" className="w-full h-full object-cover" />
              </figure>
              <div className="p-4 md:p-5">
                <h3 className="text-xl md:text-2xl font-semibold">IoT RC Car (ESP32 + Blynk)</h3>
                <p className="mt-2 text-neutral-300 leading-relaxed text-sm md:text-base">
                  รถบังคับควบคุมผ่าน Wi-Fi ด้วยแอป Blynk สั่งเดินหน้า/ถอยหลัง/เลี้ยวแบบเรียลไทม์
                </p>
              </div>
            </article>

            <article className="border-cyan-300 border-dashed border-4 rounded-2xl overflow-hidden">
              <figure className="aspect-[4/3] overflow-hidden">
                <img src="spu.jpg" alt="SPU Coding Bootcamp (Power Apps)" className="w-full h-full object-cover" />
              </figure>
              <div className="p-4 md:p-5">
                <h3 className="text-xl md:text-2xl font-semibold">SPU Coding Bootcamp</h3>
                <p className="mt-2 text-neutral-300 leading-relaxed text-sm md:text-base">
                  เรียนสร้างแอปด้วย Power Apps ตั้งแต่ UI/เชื่อมฐานข้อมูล จนถึงทดสอบใช้งานจริง พร้อมโจทย์แข่งจำกัดเวลา
                </p>
              </div>
            </article>
          </div>
        </section>


        <section id="contact" className="w-full max-w-7xl bg-neutral-900 rounded-3xl py-8 md:py-10 scroll-mt-[120px]">
          <div className="text-white text-center mb-6 md:mb-10">
            <h1 className="text-4xl md:text-6xl">Contact</h1>
            <p className="text-2xl md:text-3xl mt-2">contact me!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl">Social</h1>
              <div className="mt-6 space-y-3 md:space-y-4">
                <p className="text-lg md:text-xl">Facebook : Phacharaphol Phinitkit</p>
                <p className="text-lg md:text-xl">Instagram : pc0rqnkz</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:border-l md:border-white/20">
              <h1 className="text-3xl md:text-4xl">Contact</h1>
              <div className="mt-6 space-y-3 md:space-y-4">
                <p className="text-lg md:text-xl">E-mail : phacharaphol.ph@gmail.com</p>
                <p className="text-lg md:text-xl">Phone : 0922677624</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
