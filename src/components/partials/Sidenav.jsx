{/*import React from 'react';
import {Link} from 'react-router-dom';

function Sidenav (){
  
    return (
         <div className="w-[20%] h-full border-2 border-zinc-200 p-10">
            <h1 className="text-2xl text-white font-bold">
               <i  class="ri-tv-fill"></i>
               FETCH
            </h1>
            <hr className="bg-amber-400 mb-6 mt-4"/>
             <h1 className="flex items-center justify-center text-2xl font-bold">New Feeds</h1>
          <div className="nav flex flex-col gap-[1vw] mt-2.5 items-center mr-1">
                 <Link to="/trending" className="p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg  mr-1">
                  <i class="ri-fire-fill"></i>
                   Trendings
                   </Link> 
                <Link to="/popular" className="p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg mr-1">
                  <i class="ri-bard-fill"></i>
                  Popular
                  </Link>
               <Link to="/movie" className="p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg mr-1 ">
                 <i class="ri-tv-2-fill"></i>
                 Movies
                 </Link>
                  <Link to="/tv" className="p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg mr-1 ">
                 <i class="ri-tv-2-fill"></i>
                 TvShow
                 </Link>
              <Link to="/person" className="p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg mr-1">
                <i  class="ri-team-fill"></i>
                People
                </Link>
             </div>
             
             <div className="nav flex flex-col gap-[1vw] mt-2.5 items-center mr-1">
                 <h1 className="text-[2vw] text-center font-bold">Wbesite Information</h1>
                  <div className="bg-zinc-400 w-[10vw] h-[4px]"></div>
                 <Link className="p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg  mr-1">
                  <i class="ri-information-fill"></i>
                   About FETCHMOVIE
                   </Link> 
                <Link className="p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg mr-1">
                  <i class="ri-phone-fill"></i>
                  Contact
                  </Link>
             </div>
              
</div>


      )
}

export default Sidenav;
*/}
import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className="w-full lg:w-[20%] h-auto lg:h-screen border-2 border-zinc-200 p-6 lg:p-10 bg-[#1F1E24]">
      {/* Logo Section */}
      <h1 className="text-xl lg:text-2xl text-white font-bold flex items-center gap-2 justify-center lg:justify-start">
        <i className="ri-tv-fill"></i> FETCH
      </h1>
      <hr className="bg-amber-400 mb-6 mt-4" />

      {/* Navigation Links */}
      <h1 className="text-lg lg:text-2xl font-bold text-center lg:text-left">New Feeds</h1>
      <div className="nav flex flex-col gap-4 mt-4 items-center lg:items-start">
        <Link
          to="/trending"
          className="w-full text-center lg:text-left p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg"
        >
          <i className="ri-fire-fill"></i> Trendings
        </Link>
        <Link
          to="/popular"
          className="w-full text-center lg:text-left p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg"
        >
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link
          to="/movie"
          className="w-full text-center lg:text-left p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg"
        >
          <i className="ri-tv-2-fill"></i> Movies
        </Link>
        <Link
          to="/tv"
          className="w-full text-center lg:text-left p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg"
        >
          <i className="ri-tv-2-fill"></i> TvShow
        </Link>
        <Link
          to="/person"
          className="w-full text-center lg:text-left p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg"
        >
          <i className="ri-team-fill"></i> People
        </Link>
      </div>

      {/* Website Information Section */}
      <div className="nav flex flex-col gap-4 mt-8 items-center lg:items-start">
        <h1 className="text-lg lg:text-xl text-center lg:text-left font-bold">Website Information</h1>
        <div className="bg-zinc-400 w-full lg:w-[80%] h-[4px]"></div>
        <Link
          className="w-full text-center lg:text-left p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg"
        >
          <i className="ri-information-fill"></i> About FETCHMOVIE
        </Link>
        <Link
          className="w-full text-center lg:text-left p-4 hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg"
        >
          <i className="ri-phone-fill"></i> Contact
        </Link>
      </div>
    </div>
  );
}

export default Sidenav;
