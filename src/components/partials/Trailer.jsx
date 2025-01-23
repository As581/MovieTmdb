{/*import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation,useNavigate,Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes('movie') ? 'movie' : 'tv';
  const yVideo = useSelector((state) => state[category]?.info?.videos || null);

  return (
    <div className="w-screen h-screen absolute bg-[rgba(0,0,0,.9)] top-0 left-0 flex items-center justify-center z-[100]">
        <Link
          onClick={() => navigate(-1)}
          className=" absolute right-0 top-[5%] text-5xl ri-close-fill cursor-pointer mr-10 hover:text-zinc-200"
        >
        
        </Link>
      {yVideo && yVideo.key ? (
        <ReactPlayer
          height="70vh"
          width="80vw"
          url={`https://www.youtube.com/watch?v=${yVideo.key}`}
          controls
        />
      ) : (
        <div className="w-full h-screen flex items-center justify-center text-white text-lg">
          {yVideo ? "Not Found" : "Loading trailer..."}
        </div>
      )}
    </div>
  );
}

export default Trailer;
*/}
import React from "react";
import ReactPlayer from "react-player";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const yVideo = useSelector((state) => state[category]?.info?.videos || null);

  return yVideo ? (
    <div className="absolute w-screen h-screen bg-[rgba(0,0,0,.9)] top-0 left-0 flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute right-[2%] top-[5%] text-5xl ri-close-fill cursor-pointer text-white hover:text-zinc-200"
      >
      </Link>
      {yVideo.key ? (
        <ReactPlayer
          height="70vh"
          width="80vw"
          url={`https://www.youtube.com/watch?v=${yVideo.key}`}
          controls
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white text-lg">
          "Not Found"
        </div>
      )}
    </div>
  ) : null;
}

export default Trailer;

