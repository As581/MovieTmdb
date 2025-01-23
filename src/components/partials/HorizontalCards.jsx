{/*import React from 'react';
import { Link } from 'react-router-dom'; 
import DropDown from './DropDown.jsx';

function HorizontalCards({ data }) {
  return (
    <>
      <div className="w-full h-[35vh] bg-zinc-200 overflow-y-auto">
        <div className="w-[100%] flex bg-zinc-900 overflow-y-hidden p-5">
          {data.map((d, i) => (
            <Link to={`/${d.media_type}/details/${d.id}`} key={i} className=" min-w-[15%] bg-zinc-300 mr-5 h-[36vh]">
              <img
                className="w-full h-[55%] object-cover"
                src={
                  d.backdrop_path || d.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        d.backdrop_path || d.profile_path
                      }`
                    : "https://via.placeholder.com/150?text=No+Image"
                }
                alt="Profile or Backdrop"
              />
              <div className="text-white p-3">
                <h1 className="text-white text-xl font-bold">
                  {d.name || d.original_title || d.title}
                </h1>
                <p className="mt-3 text-white">
  {d.overview ? d.overview.slice(0,40) : "No description available"}...
  <Link to="#" className="text-blue-400">More</Link>
</p>


              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HorizontalCards;
*/}
import React from "react";
import { Link } from 'react-router-dom'; 
import DropDown from './DropDown.jsx';

const HorizontalCard = ({ data }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-5 overflow-x-scroll no-scrollbar py-4">
        {data?.map((item, index) => (
          <Link to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className="flex-none w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white rounded-md shadow-lg p-4"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${item?.poster_path || item?.backdrop_path}`}
              alt={item.title || "Movie Poster"}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 truncate">{item.title || item.name}</h2>
            <p className="text-sm text-gray-600">{item.release_date || item.first_air_date}</p>
            <p className="text-sm text-gray-600 truncate">{item.overview || "No overview available."}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;

