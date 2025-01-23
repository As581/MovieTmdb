{/*import React,{useEffect} from 'react';
import {useLocation,useParams,useNavigate,Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {asyncloadmovie,removemovie} from '../store/actions/movieAction.jsx';
import HorizontalCards from './partials/HorizontalCards';
function MovieDetails (){
      const { pathname } = useLocation();
      const navigate = useNavigate();
      const { id } = useParams();
      const {info}= useSelector((state) => state.movie);
    console.log("info",info); // Inspect state

      const dispatch = useDispatch();
      useEffect(()=>{
          dispatch(asyncloadmovie(id));
          return ()=>{
               dispatch(removemovie());
          }
      },[]);
   return info ? (
        <div style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || "no image"
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }} className="w-screen h-[145vh] px-[10%] relative">
          <div className="nav w-full text-zinc-200 text-4xl flex items-center justify-start gap-4 p-10">
             <Link 
            onClick={() => navigate(-1)}
            className="text-3xl ri-arrow-left-line cursor-pointer mr-10"
          ></Link>{" "}
          <a  target="_blank" href={info.detail.homepage}>
           <i class="ri-external-link-fill"></i>
          </a>
           <a  target="_blank" href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`}>
           <i class="ri-earth-fill"></i>
           </a>
           <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>
             Imdb
           </a>
          </div>
          
        <div className=" w-full flex">
          <img
              className="shadow-[8px_17px_38px_2px,rgba(0,0,0,.5)] w-[35vw] h-[60vh] object-cover"
              src={
                info.detail.backdrop_path
                || info.detail.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      info.detail.backdrop_path || info.detail.poster_path
                    }`
                  : "https://via.placeholder.com/150?text=No+Image"
              }
              alt="Profile or Backdrop"
            />
    <div className="content ml-[5%] ">
            <h1 className="text-6xl font-black text-white">
              {info.detail.name || info.detail.original_title || info.detail.title}
                  <small className="text-2xl font-bold text-zinc-200">
                    ({info.detail.release_date.split("-")[0]})
                    </small>
                 </h1>
          <div className="mt-10 mb-3 flex items-center gap-x-7 mt-4">
      {info.detail.vote_average && (
            <div className="bg-yellow-500 text-white rounded-full w-[3rem] h-[3rem] flex items-center justify-center text-lg font-bold shadow-md">
              {info.detail.vote_average.toFixed(1)}
              </div>)}
                 
                 <h1 className="w-[25px] font-semibold text-xl leading-7">User Score</h1>
                 <h1>{info.detail.release_date}</h1>
                 <h1>{info.detail.genres.map((g)=> g.name).join(",")}</h1>
                 <h1>{info.detail.runtime}min</h1>
            </div>
            <h1 className="text-2xl text-white italic mt-5">{info.detail.tagline}</h1>
            <h1 className="text-2xl mt-3 mb-3 font-bold text-white">Overview</h1>
            <p>{info.detail.overview}</p>
          <h1 className="text-3xl text-white mt-4 mb-4 font-bold">Movie Translated</h1>
             <p className="mb-[8%]">{info.translations.join(" ")}</p>
             <Link to={`${pathname}/Trailer`}className="mt-4 px-6 py-6 rounded-md bg-[#6556CD] text-xl">
                 <i className=" text-xl mr-2 ri-play-fill"></i>
                 Play Trailer
             </Link>
             </div>
          </div>
          <div className="w-[80%] flex flex-col mt-5 mb-10 py-10">
        {info.watchproviders && info.watchproviders.flatrate && ( <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w) => (<img title={w.provider_name}
          className="w-[7vh] h-[5vh] rounded-md object-cover"
          src={
            w.logo_path
              ? `https://image.tmdb.org/t/p/original/${w.logo_path || "no image"}`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt="Profile or Backdrop"
        />))}
            </div>)}
        
            {info.watchproviders && info.watchproviders.rent && ( <div className="flex gap-x-10 items-center">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w) => (<img title={w.provider_name}
          className="w-[7vh] h-[5vh] rounded-md object-cover"
          src={
            w.logo_path
              ? `https://image.tmdb.org/t/p/original/${w.logo_path || "no image"}`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt="Profile or Backdrop"
        />))}
            </div>)}
        
        
    {info.watchproviders && info.watchproviders.buy && ( <div className="flex gap-x-10 items-center">
            <h1>Available on Buy</h1>
            {info.watchproviders.buy.map((w) => (<img title={w.provider_name}
          className="w-[7vh] h-[5vh] rounded-md object-cover"
          src={
            w.logo_path
              ? `https://image.tmdb.org/t/p/original/${w.logo_path || "no image"}`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt="Profile or Backdrop"
        />))}
            </div>)}
              <hr className="mt-5 text-zinc-200 font-bold text-2xl h-[20px] mb-3"/>
              <h1 className="text-3xl font-bold text-white mt-3 mb-1">Recommendations & Similar stuff</h1>
             </div>
          <HorizontalCards data={info.recommendations > 0 ? info.recommendations: info.similar} />
      </div>
     ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
    );
}

export default MovieDetails;*/}

{/*import React, { useEffect } from "react";
import { Outlet,useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieAction.jsx";
import HorizontalCards from "./partials/HorizontalCards";
function MovieDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  console.log("info:", info); // Debugging state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          info.detail?.backdrop_path || "no_image"
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen h-[145vh] px-[10%] relative"
    >
      <div className="nav w-full text-zinc-200 text-4xl flex items-center justify-start gap-4 p-10">
        <Link
          onClick={() => navigate(-1)}
          className="text-3xl ri-arrow-left-line cursor-pointer mr-10"
        >
          Back
        </Link>
        {info.detail?.homepage && (
          <a target="_blank" href={info.detail.homepage} rel="noopener noreferrer">
            <i className="ri-external-link-fill"></i>
          </a>
        )}
        {info.externalid?.wikidata_id && (
          <a
            target="_blank"
            href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`}
            rel="noopener noreferrer"
          >
            <i className="ri-earth-fill"></i>
          </a>
        )}
        {info.externalid?.imdb_id && (
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
            rel="noopener noreferrer"
          >
            Imdb
          </a>
        )}
      </div>


      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px,rgba(0,0,0,.5)] w-[35vw] h-[60vh] object-cover"
          src={
            info.detail?.backdrop_path || info.detail?.poster_path
              ? `https://image.tmdb.org/t/p/original/${
                  info.detail.backdrop_path || info.detail.poster_path
                }`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt="Profile or Backdrop"
        />
        <div className="content ml-[5%]">
          <h1 className="text-6xl font-black text-white">
            {info.detail?.name ||
              info.detail?.original_title ||
              info.detail?.title}
            <small className="text-2xl font-bold text-zinc-200">
              ({info.detail?.release_date?.split("-")[0] || "N/A"})
            </small>
          </h1>
          <div className="mt-10 mb-3 flex items-center gap-x-7 mt-4">
            {info.detail?.vote_average && (
              <div className="bg-yellow-500 text-white rounded-full w-[3rem] h-[3rem] flex items-center justify-center text-lg font-bold shadow-md">
                {info.detail.vote_average.toFixed(1)}
              </div>
            )}
            <h1 className="font-semibold text-xl leading-7">User Score</h1>
            <h1>{info.detail?.release_date || "Unknown"}</h1>
            <h1>
              {info.detail?.genres?.map((g, index) => g.name).join(", ") || "N/A"}
            </h1>
            <h1>{info.detail?.runtime || "N/A"} min</h1>
          </div>
          <h1 className="text-2xl text-white italic mt-5">
            {info.detail?.tagline || ""}
          </h1>
          <h1 className="text-2xl mt-3 mb-3 font-bold text-white">Overview</h1>
          <p>{info.detail?.overview || "No overview available."}</p>
          <h1 className="text-3xl text-white mt-4 mb-4 font-bold">
            Movie Translated
          </h1>
          <p className="mb-[8%]">
            {Array.isArray(info.translations)
              ? info.translations.join(" ")
              : "No translations available"}
          </p>
          <Link
            to={`${pathname}/Trailer`}
            className="mt-4 px-6 py-6 rounded-md bg-[#6556CD] text-xl"
          >
            <i className="text-xl mr-2 ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>


      <div className="w-[80%] flex flex-col mt-5 mb-10 py-10">
        {info.watchproviders?.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w, index) => (
              <img
                key={index}
                title={w.provider_name}
                className="w-[7vh] h-[5vh] rounded-md object-cover"
                src={
                  w.logo_path
                    ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                    : "https://via.placeholder.com/150?text=No+Image"
                }
                alt={w.provider_name || "Provider Logo"}
              />
            ))}
          </div>
        )}
        {info.watchproviders?.rent && (
          <div className="flex gap-x-10 items-center">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, index) => (
              <img
                key={index}
                title={w.provider_name}
                className="w-[7vh] h-[5vh] rounded-md object-cover"
                src={
                  w.logo_path
                    ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                    : "https://via.placeholder.com/150?text=No+Image"
                }
                alt={w.provider_name || "Provider Logo"}
              />
            ))}
          </div>
        )}
        {info.watchproviders?.buy && (
          <div className="flex gap-x-10 items-center">
            <h1>Available on Buy</h1>
            {info.watchproviders.buy.map((w, index) => (
              <img
                key={index}
                title={w.provider_name}
                className="w-[7vh] h-[5vh] rounded-md object-cover"
                src={
                  w.logo_path
                    ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                    : "https://via.placeholder.com/150?text=No+Image"
                }
                alt={w.provider_name || "Provider Logo"}
              />
            ))}
          </div>
        )}
        <hr className="mt-5 text-zinc-200 font-bold text-2xl h-[20px] mb-3" />
        <h1 className="text-3xl font-bold text-white mt-3 mb-1">
          Recommendations & Similar Stuff
        </h1>
      </div>

      <HorizontalCards
        data={
          info.recommendations?.length > 0
            ? info.recommendations
            : info.similar || []
        }
      />
      <Outlet />
    </div>

  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default MovieDetails;
*/}


import React, { useEffect } from "react";
import { Outlet, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieAction.jsx";
import HorizontalCards from "./partials/HorizontalCards";

function MovieDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  console.log("info:", info); // Debugging state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          info.detail?.backdrop_path || "no_image"
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen h-[220vh] px-[5%] sm:px-[10%] relative md:w-full md:h-[220vh] sm:h-[220vh]"
    >
      {/* Navigation Links */}
      <div className="mx-[4vw] md:mx-[0vw] pt-2">
       <div className="nav w-screen md:w-full text-zinc-200 text-2xl md:text-4xl md:p-4 flex items-center justify-start px-[9vw] gap-5">
        <div className="flex items-center justify-center">
         <Link
          onClick={() => navigate(-1)}
          className="text-1xl ri-arrow-left-line cursor-pointer mr-4 sm:mr-10 md:text-2xl"
        >
          Back
        </Link>
        </div>
        <div className="flex items-center gap-3">
          {info.detail?.homepage && (
          <a target="_blank" href={info.detail.homepage} rel="noopener noreferrer">
            <i className="ri-external-link-fill"></i>
          </a>
        )}
        {info.externalid?.wikidata_id && (
          <a
            target="_blank"
            href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`}
            rel="noopener noreferrer"
          >
            <i className="ri-earth-fill"></i>
          </a>
        )}
        {info.externalid?.imdb_id && (
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
            rel="noopener noreferrer"
          >
            Imdb
          </a>
        )}
        </div>

      </div>
      </div>

      {/* Movie Details Section */}
      <div className="mr-[5vw] mt-4 md:mr-[0vw] md:mt-0">
              <div className="w-full flex flex-col sm:flex-row items-center sm:items-start">
        <img
          className="shadow-[8px_17px_38px_2px,rgba(0,0,0,.5)] w-[80vw] sm:w-[35vw] h-[50vh] sm:h-[60vh] object-cover mb-4 sm:mb-0"
          src={
            info.detail?.backdrop_path || info.detail?.poster_path
              ? `https://image.tmdb.org/t/p/original/${
                  info.detail.backdrop_path || info.detail.poster_path
                }`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt="Profile or Backdrop"
        />
        <div className="content sm:ml-[5%] text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-black text-white">
            {info.detail?.name ||
              info.detail?.original_title ||
              info.detail?.title}
            <small className="text-xl sm:text-2xl font-bold text-zinc-200">
              ({info.detail?.release_date?.split("-")[0] || "N/A"})
            </small>
          </h1>
          <div className="mt-4 sm:mt-10 mb-3 flex items-center gap-x-4 sm:gap-x-7 mt-4">
            {info.detail?.vote_average && (
            <div className="bg-yellow-500 text-white rounded-full sm:rounded-full sm:text-base w-[2.8rem] h-[2rem] sm:w-[2.8rem] sm:h-[2.5rem] flex items-center justify-center text-[2.6vw] sm:text-sm font-bold shadow-md">
               {info.detail.vote_average.toFixed(1)}
         </div>


            )}
            <h1 className="font-semibold text-[2.8vw] sm:text-xl">User Score</h1>
            <h1>{info.detail?.release_date || "Unknown"}</h1>
            <h1>
              {info.detail?.genres?.map((g, index) => g.name).join(", ") || "N/A"}
            </h1>
            <h1>{info.detail?.runtime || "N/A"} min</h1>
          </div>
          <h1 className="text-2xl text-white italic mt-5">
            {info.detail?.tagline || ""}
          </h1>
          <h1 className="text-2xl sm:text-3xl mt-3 mb-3 font-bold text-white">Overview</h1>
          <p className="text-base sm:text-lg">{info.detail?.overview || "No overview available."}</p>
          <h1 className="text-3xl sm:text-4xl text-white mt-4 mb-4 font-bold">
            Movie Translated
          </h1>
          <p className="mb-[8%] text-base sm:text-lg">
            {Array.isArray(info.translations)
              ? info.translations.join(" ")
              : "No translations available"}
          </p>
          <Link
            to={`${pathname}/Trailer`}
            className="mt-4 px-6 py-3 rounded-md bg-[#6556CD] text-lg sm:text-xl"
          >
            <i className="text-xl mr-2 ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>
      </div>

      {/* Watch Providers */}
      <div className="w-full sm:w-[80%] flex flex-col mt-5 mb-10 py-10">
        {info.watchproviders?.flatrate && (
          <div className="flex gap-x-4 sm:gap-x-10 items-center text-white">
            <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w, index) => (
              <img
                key={index}
                title={w.provider_name}
                className="w-[6vh] sm:w-[7vh] h-[4vh] sm:h-[5vh] rounded-md object-cover"
                src={
                  w.logo_path
                    ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                    : "https://via.placeholder.com/150?text=No+Image"
                }
                alt={w.provider_name || "Provider Logo"}
              />
            ))}
          </div>
        )}
        {info.watchproviders?.rent && (
          <div className="flex gap-x-4 sm:gap-x-10 items-center">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, index) => (
              <img
                key={index}
                title={w.provider_name}
                className="w-[6vh] sm:w-[7vh] h-[4vh] sm:h-[5vh] rounded-md object-cover"
                src={
                  w.logo_path
                    ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                    : "https://via.placeholder.com/150?text=No+Image"
                }
                alt={w.provider_name || "Provider Logo"}
              />
            ))}
          </div>
        )}
        {info.watchproviders?.buy && (
          <div className="flex gap-x-4 sm:gap-x-10 items-center">
            <h1>Available on Buy</h1>
            {info.watchproviders.buy.map((w, index) => (
              <img
                key={index}
                title={w.provider_name}
                className="w-[6vh] sm:w-[7vh] h-[4vh] sm:h-[5vh] rounded-md object-cover"
                src={
                  w.logo_path
                    ? `https://image.tmdb.org/t/p/original/${w.logo_path}`
                    : "https://via.placeholder.com/150?text=No+Image"
                }
                alt={w.provider_name || "Provider Logo"}
              />
            ))}
          </div>
        )}
        <hr className="mt-5 text-zinc-200 font-bold text-2xl h-[20px] mb-3" />
        <h1 className="text-2xl md:text-3xl sm:text-3xl sm:text-4xl font-bold text-white mt-2 md:mt-3  sm:mt-3 mb-1 sm:mt-3 mb-1">
          Recommendations & Similar Stuff
        </h1>
      </div>

      {/* Horizontal Cards */}
      <HorizontalCards
        data={
          info.recommendations?.length > 0
            ? info.recommendations
            : info.similar || []
        }
      />
      <Outlet />
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default MovieDetails;


