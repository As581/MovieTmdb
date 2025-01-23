{/*import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/Axios.jsx';


function Topnav (){
  const [query, setQuery] = useState("");
const [search, setSearch] = useState([]);
  
const GetSearch = async () => {
  try {
    const {data} = await axios.get(
      `/search/movie?query=${query}`
    );
   // console.log(response.data.results);
   console.log("search",data.results);
   setSearch(data.results);
  } catch (error) {
    console.log("Error:", error.response?.data || error.message);
  }
};

useEffect(() => {
  if (query) {
    GetSearch();
  }
}, [query]);

  
  return (
     <div className=" z-[100] w-[50%]  h-[10vh] flex items-center relative m-auto sm:m-0  justify-center">

        <i className="text-zinc-400 text-2xl ri-search-fill"></i>
       <input 
  onChange={(e) => setQuery(e.target.value)} 
  value={query} 
  className="w-[50%] mx-4 bg-transparent text-xl outline-none border-none" 
  type="text" 
  placeholder="Search Anything..."
/>
{query.length > 0 && (
  <i 
    onClick={() => {
      setQuery("");
    }} 
    className="text-zinc-400 text-2xl ri-close-fill"
  ></i>
)}

{query.length > 0 && (
  <div className="w-[60%] max-h-[35vh] absolute bg-zinc-200 top-[100%] overflow-y-auto">
    {search.map((s, i) => (
      <Link to={`/movie/details/${s.id}`}
        key={i}
        className="w-[100%] flex items-center justify-start p-10 border-b-2 border-zinc-100 text-zinc-600 font-semibold text-3xl hover:text-black hover:text-zinc-300 duration-200"
      >
        <img
          className="w-[10vh] h-[10vh] object-cover rounded mr-5"
          src={
            s.backdrop_path || s.profile_path
              ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt="Profile or Backdrop"
        />
        <h1>{s.name || s.original_title || s.title}</h1>
      </Link>
    ))}
  </div>
)}




      </div>

    )
}
export default Topnav;
*/}
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios.jsx";

function Topnav() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);

  const GetSearch = async () => {
    try {
      const { data } = await axios.get(`/search/movie?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (query) {
      GetSearch();
    }
  }, [query]);

  return (
  <div className="z-[100] w-full sm:w-[100%] h-[10vh] flex items-center relative justify-center px-4">
  {/* Search Icon */}
  <i className="text-zinc-400 text-2xl ri-search-fill"></i>
  
  {/* Input Box */}
  <input
    onChange={(e) => setQuery(e.target.value)}
    value={query}
    className="w-[60%] mx-4 bg-transparent text-lg sm:text-xl outline-none border-none text-zinc-300"
    type="text"
    placeholder="Search Anything..."
  />
  
  {/* Clear Button */}
  {query.length > 0 && (
    <i
      onClick={() => setQuery("")}
      className="text-zinc-400 text-2xl ri-close-fill cursor-pointer"
    ></i>
  )}
  
  {/* Search Results Dropdown */}
  {query.length > 0 && (
    <div className="w-full sm:w-[60%] max-h-[35vh] absolute bg-zinc-200 top-[100%] mt-2 rounded-lg shadow-lg overflow-y-auto">
      {search.length > 0 ? (
        search.map((s, i) => (
          <Link
            to={`/movie/details/${s.id}`}
            key={i}
            className="flex items-center p-4 gap-4 border-b border-zinc-300 text-zinc-600 font-medium text-base sm:text-lg hover:bg-zinc-300 hover:text-black duration-200"
          >
            <img
              className="w-12 h-12 sm:w-1 sm:h-1 md:w-14 md:h-14 object-cover rounded"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                  : "https://via.placeholder.com/150?text=No+Image"
              }
              alt={s.name || s.original_title || "No Image"}
            />
            <span>{s.name || s.original_title || s.title}</span>
          </Link>
        ))
      ) : (
        <div className="p-4 text-center text-zinc-500 font-medium">
          No results found.
        </div>
      )}
    </div>
  )}
</div>


  );
}

export default Topnav;
