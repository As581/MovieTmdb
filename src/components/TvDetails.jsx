{/*import React, { useEffect } from "react";
import { Outlet,useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvAction.jsx";
import HorizontalCards from "./partials/HorizontalCards";

function TvDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("detail",id);
  const { info } = useSelector((state) => state.tv);

  console.log("info:", info); // Debugging state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
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
              ({info.detail?.first_air_date?.split("-")[0] || "N/A"})
            </small>
          </h1>
          <div className="mt-10 mb-3 flex items-center gap-x-7 mt-4">
            {info.detail?.vote_average && (
              <div className="bg-yellow-500 text-white rounded-full w-[3rem] h-[3rem] flex items-center justify-center text-lg font-bold shadow-md">
                {info.detail.vote_average.toFixed(1)}
              </div>
            )}
            <h1 className="font-semibold text-xl leading-7">User Score</h1>
            <h1>{info.detail?.first_air_date || "Unknown"}</h1>
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
             Seasons
        </h1>
      </div>

      <div className="w-full overflow-x-scroll flex flex-wrap gap-4 p-4">
  {info.detail.seasons.map((season, index) => (
    <div 
      key={index} 
      className="w-[80vw] sm:w-[35vw] md:w-[25vw] h-auto flex-shrink-0 bg-gray-800 rounded-md overflow-hidden shadow-lg"
    >
      <img
        className="w-full h-[30vh] sm:h-[40vh] object-cover"
        src={
          season.poster_path
            ? `https://image.tmdb.org/t/p/original/${season.poster_path}`
            : "https://via.placeholder.com/150?text=No+Image"
        }
        alt={season.name || "Season"}
      />
      <div className="p-4">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {season.name || "N/A"}
        </h1>
        <p className="text-sm sm:text-base font-medium text-gray-400">
          Air Date:{" "}
          {season.air_date ? season.air_date.split("-")[0] : "N/A"}
        </p>
      </div>
    </div>
  ))}
</div>


        <div>
        <hr className="mt-5 text-zinc-200 font-bold text-2xl h-[20px] mb-3" />
        <h1 className="text-3xl font-bold text-white mt-3 mb-1">
          Recommendations & Similar Stuff
        </h1>
      </div>
    <div>
          <HorizontalCards
            data={
          info.recommendations?.length > 0
            ? info.recommendations
            : info.similar || []
        }
      />
         <Outlet />
    </div>

    </div>
  

  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default TvDetails;*/}


import React, { useEffect } from "react";
import { Outlet, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvAction.jsx";
import HorizontalCards from "./partials/HorizontalCards";

function TvDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
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
      className="w-full min-h-screen px-4 md:px-[4%] py-6 bg-cover bg-center relative text-white"
    >
      {/* Navigation Links */}
      <div className="nav flex flex-wrap items-center justify-start gap-4 p-4 text-white text-lg md:text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className="text-xl md:text-2xl ri-arrow-left-line cursor-pointer"
        >
          Back
        </Link>
        {info.detail?.homepage && (
          <a
            target="_blank"
            href={info.detail.homepage}
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="ri-external-link-fill"></i>
          </a>
        )}
        {info.externalid?.wikidata_id && (
          <a
            target="_blank"
            href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`}
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="ri-earth-fill"></i>
          </a>
        )}
        {info.externalid?.imdb_id && (
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
            rel="noopener noreferrer"
            className="text-xl"
          >
            Imdb
          </a>
        )}
      </div>

      {/* TV Details Section */}
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <img
          className="w-full md:w-[35%] lg:w-[30%] md:h-[60vh] object-cover rounded-lg shadow-lg"
          src={
            info.detail?.backdrop_path || info.detail?.poster_path
              ? `https://image.tmdb.org/t/p/original/${
                  info.detail.backdrop_path || info.detail.poster_path
                }`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt="Profile or Backdrop"
        />
        <div className="content w-full md:w-[65%] lg:w-[70%] text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            {info.detail?.name || info.detail?.original_title || info.detail?.title}
            <span className="text-lg font-normal text-gray-300 ml-2">
              ({info.detail?.first_air_date?.split("-")[0] || "N/A"})
            </span>
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            {info.detail?.vote_average && (
              <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-md">
                {info.detail.vote_average.toFixed(1)}
              </div>
            )}
            <span className="text-lg">User Score</span>
            <span className="text-lg">
              {info.detail?.genres?.map((g) => g.name).join(", ") || "N/A"}
            </span>
            <span className="text-lg">{info.detail?.runtime || "N/A"} min</span>
          </div>
          <p className="text-lg italic mt-4">{info.detail?.tagline || ""}</p>  
          <h1 className="text-3xl text-white mt-4 mb-4 font-bold">Overview</h1>
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

      {/* Seasons */}
      <div className="mt-8">
        <h2 className="text-3xl text-white font-bold mb-4">Seasons</h2>
        <div className="flex overflow-x-auto gap-6">
          {info.detail?.seasons.map((season, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80%] md:w-[40%] lg:w-[25%] bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={
                  season.poster_path
                    ? `https://image.tmdb.org/t/p/original/${season.poster_path}`
                    : "https://via.placeholder.com/150?text=No+Image"
                }
                alt={season.name}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{season.name || "N/A"}</h3>
                <p className="text-sm text-gray-400">
                  Air Date: {season.air_date || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-12">
        <h2 className="text-3xl text-white font-bold mb-4">Recommendations & Similar</h2>
        <HorizontalCards
          data={
            info.recommendations?.length > 0
              ? info.recommendations
              : info.similar || []
          }
        />
        <Outlet />
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default TvDetails;


