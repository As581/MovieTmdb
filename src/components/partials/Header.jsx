{/*import React from "react";
import {Link} from 'react-router-dom';
function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-start items-start p-[10%]"
    >
      <h1 className="w-[70%] text-white text-6xl font-bold shadow-lg">
        {data.name || data.original_title || data.title}
      </h1>
      <p className="w-[70%] mt-3 text-white"> {data.overview ? data.overview.slice(0,150) : "No description available"}...
  <Link to="#" className="text-blue-400">More</Link></p>
      <p className="text-white mt-4">
  <i className="text-yellow-400 mr-1 ri-megaphone-fill"></i>
  {data.release_date || "No Information"}
  <i className="text-yellow-400 ml-4 mr-1 ri-album-fill"></i>
  {data.media_type}
</p>
   <Link className="p-3 bg-[#6556CD] text-white rounded-full mt-6 text-[1vw] text-center">
       Watch Trailer
   </Link>

    </div>
  );
}

export default Header;
*/}
import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path || ""
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-start items-start p-8 sm:p-[10%]"
    >
      {/* Title */}
      <h1 className="w-full sm:w-[70%] text-white text-3xl sm:text-6xl font-bold shadow-lg">
        {data.name || data.original_title || data.title || "No Title Available"}
      </h1>

      {/* Overview */}
      <p className="w-full sm:w-[70%] mt-3 text-white text-sm sm:text-base">
        {data.overview ? data.overview.slice(0, 150) : "No description available"}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 hover:underline">More</Link>
      </p>

      {/* Metadata */}
      <p className="text-white mt-4 text-sm sm:text-base flex items-center gap-4">
        <span>
          <i className="text-yellow-400 ri-megaphone-fill mr-1"></i>
          {data.release_date || "No Release Date"}
        </span>
        <span>
          <i className="text-yellow-400 ri-album-fill mr-1"></i>
          {data.media_type || "No Media Type"}
        </span>
      </p>

      {/* Watch Trailer Button */}
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="p-3 bg-[#6556CD] text-white rounded-full mt-6 text-sm sm:text-base text-center hover:bg-[#5147a6] transition-all duration-300"
      >
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
