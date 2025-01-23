{/*import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ data,title }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-center mt-4 p-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link className="  w-[25vh] mr-[5%] mb-[3%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px,rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={
              c.backdrop_path || c.poster_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
          c.backdrop_path || c.poster_path || c.profile_path
                  }`
                : "https://via.placeholder.com/150?text=No+Image"
            }
            alt="Profile or Backdrop"
          />
          <h1 className="text-2xl text-zinc-200 font-bold mt-6">
            {c.name || c.original_title || c.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default Cards;*/}
{/*import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ data, title }) {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="w-full flex items-center justify-center text-zinc-200 mt-4">
        <h1 className="text-xl font-bold">No {title} Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-wrap items-center justify-center mt-4 p-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <div className="relative w-[25vh] mr-[5%] mb-[3%]" key={i}>
          <Link to={`/${c.media_type || title}/details/${c.id}`}>
            <img
              className="shadow-[8px_17px_38px_2px,rgba(0,0,0,.5)] h-[40vh] object-cover"
              src={
                c.backdrop_path || c.poster_path || c.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      c.backdrop_path || c.poster_path || c.profile_path
                    }`
                  : "https://via.placeholder.com/150?text=No+Image"
              }
              alt="Profile or Backdrop"
            />
            <h1 className="text-2xl text-zinc-200 font-bold mt-6">
              {c.name || c.original_title || c.title}
            </h1>
          </Link>

          {c.vote_average && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white rounded-full w-[3rem] h-[3rem] flex items-center justify-center text-lg font-bold shadow-md">
              {c.vote_average.toFixed(1)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards;
*/}
import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ data, title }) {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="w-full flex items-center justify-center text-zinc-200 mt-4">
        <h1 className="text-xl font-bold">No {title} Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-start sm:flex bg-[#1F1E24] md:ml-5">
    <div className="w-full flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-start sm:flex bg-[#1F1E24] md:ml-10">
      {data.map((c, i) => (
         <div
          className="relative w-full sm:w-[20vw] h-[50vh] sm:h-[40vh] mb-6 overflow-hidden md:ml-10"
          key={i}
        >
          <Link to={`/${c.media_type || title}/details/${c.id}`}>
            {/* Full-Width Image */}
            <img
              className="w-full h-full object-cover"
              src={
                c.backdrop_path || c.poster_path || c.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      c.backdrop_path || c.poster_path || c.profile_path
                    }`
                  : "https://via.placeholder.com/150?text=No+Image"
              }
              alt={c.name || c.original_title || c.title || "No Title"}
            />
            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-md max-w-[90%]">
              <h1 className="text-lg sm:text-2xl font-bold truncate">
                {c.name || c.original_title || c.title || "No Title"}
              </h1>
              {/* Vote Average */}
              {c.vote_average && (
                <p className="text-yellow-400 mt-2 font-semibold text-sm sm:text-base">
                  Rating: {c.vote_average.toFixed(1)}
                </p>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Cards;






