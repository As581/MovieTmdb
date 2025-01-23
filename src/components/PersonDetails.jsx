import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personAction.jsx";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown.jsx";


function PersonDetails (){
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const [category,setCategory] = useState("movied");

  console.log("info:", info); // Debugging state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [dispatch, id]);

    return info ? (
       <div className="px-[15%] md:py-[2%] w-full sm:h-[150vh] md:w-screen sm:flex sm:flex-col">
              {/* navigation */}
          <Link
          onClick={() => navigate(-1)}
          className="text-1xl ri-arrow-left-line cursor-pointer mr-4 sm:mr-10 md:text-2xl">
          Back
        </Link>
        <div className="w-full  sm:flex">
             {/* part 2 left poster and details*/}
           <div className="w-full sm:w-[18vw] sm:h-[60vh] mt-5 bg-amber-500l">
            <img
          className="shadow-[8px_17px_38px_2px,rgba(0,0,0,.5)]  h-[30vh] object-cover mb-4 sm:mb-0"
          src={
             info.detail?.profile_path
              ? `https://image.tmdb.org/t/p/original/${
                info.detail.profile_path
                }`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt="Profile or Backdrop"
        />
      <hr className="mt-5 text-zinc-200 font-bold text-2xl h-[20px] mb-3 sm:h-[10px] sm:w-[11vw]" />
      
      {/*part 3 social media*/}
      <div className="text-2xl text-white flex gap-x-1.5 bg-blue-700">
            <a target="_blank"
            href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`}
            rel="noopener noreferrer"
          >
            <i className="ri-earth-fill"></i>
          </a>
          
            <a target="_blank"
            href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            rel="noopener noreferrer"
          >
            <i className="ri-facebook-circle-fill"></i>
          </a>
          
          
             <a target="_blank"
            href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          
            <a target="_blank"
            href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            rel="noopener noreferrer"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>
          
         </div>
     <div className="sm:py-5">
      <h1 className="text-2xl text-zinc-400 font-semibold">Known for</h1>
     <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>
      <h1 className="text-2xl text-zinc-400 font-semibold">Gender</h1>
           <h1 className="text-zinc-400">{info.detail.gender === 2 ? "Male" : "Female"}</h1>
              <h1 className="text-2xl text-zinc-400 font-semibold">Birthday</h1>
              <h1 className="text-zinc-400">{info.detail.birthday}</h1>
           <h1 className="text-2xl text-zinc-400 font-semibold">DeathDay</h1>
          <h1 className="text-zinc-400">{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>
           <h1 className="text-2xl text-zinc-400 font-semibold">BirthPlace</h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>
          </div>
    
         </div>
         {/*details and infoemation*/}
      <div className="w-[80%] ml-[5%]">
     <h1 className="text-6xl text-zinc-400 font-semibold mt-5">{info.detail.name}</h1>
     <h1 className="text-2xl text-zinc-700 font-bold mt-5">Biography</h1>
        <p className="text-zinc-400 mt-4">{info.detail.biography}</p>
        <h1 className="text-zinc-400 mt-3 text-2xl">Known for</h1>
        <div>
        <HorizontalCards data={info.combinedcredits.cast} />
        </div>
       <div className="w-full flex justify-between mt-2">
       <h1 className="text-zinc-400 mt-3 text-2xl">Acting</h1>
         <DropDown title="Category" options={["tv","movie"]} func={(e)=> setCategory(e.target.value)} />
       </div>
       <div className=" text-zinc-400 w-full h-[50vh] mt-4 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.3)] border-2 border-zinc-700 p-5">
        {/*}{info[category + "credits"].cast.map((c,i)=>(
                  <li key={i} className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer">
             <Link to={`/${category}/detail/${c.id}`}>
                  <span>
                    {""}
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
               <span className="block">
                     {c.character && `Character Name: ${c.character}`}
                  </span>
             </Link>
                  </li>
             ))}*/}
             {info && info[category + "credits"] && info[category + "credits"].cast ? (
  info[category + "credits"].cast.map((c, i) => (
    <li
      key={i}
      className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer"
    >
      <Link to={`/${category}/detail/${c.id}`}>
        <span>
          {c.name || c.title || c.original_name || c.original_title || "Unknown"}
        </span>
        <span className="block">
          {c.character && `Character Name: ${c.character}`}
        </span>
      </Link>
    </li>
  ))
) : (
  <p>No data available</p>
)}

       </div>
         </div>
          </div>
        </div>
        ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
    );
}

export default PersonDetails;