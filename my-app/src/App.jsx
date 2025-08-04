import React, { useState } from 'react'

function App() {

  return (

    <div class="bg-neutral-900 min-h-screen">


      <div class="sticky top-0 bg-neutral-900 border-b-3 border-cyan-600 p-4 z-50">
        <h1 className="text-xl font-bold text-center text-white">My Sticky Bar</h1>
      </div>


      <div class="flex flex-col justify-center items-center px-20 py-20">
        
        <div class="bg-neutral-800 rounded-4xl w-320 h-180 shadow-2xl mb-20 flex flex-row justify-center items-center">
          <img class="mr-60 w-auto h-100 border-4 border-cyan-600 rounded-4xl"  src="abc.png" alt="img" />
          <div class="text-white text-2xl">
            Name : Phacharaphol Phinitkit <br /><br /> Nickname : Toon <br /><br /> Age : 18 <br /><br /> School : Ratwinit Bangkeao <br /><br /> Hobby : Coding , Listen music
          </div>
        </div>
        
        <div class="bg-neutral-800 rounded-4xl w-320 h-180 shadow-2xl mb-20">
        </div>
        <div class="bg-neutral-800 rounded-4xl w-320 h-180 shadow-2xl mb-20">
        </div>
        <div class="bg-neutral-800 rounded-4xl w-320 h-180 shadow-2xl mb-20">
        </div>
        <div class="bg-neutral-800 rounded-4xl w-320 h-180 shadow-2xl mb-20">
        
        </div>
      </div>
    </div>


  )
}

export default App