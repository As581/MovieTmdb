{/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav.jsx';
import axios from '../utils/Axios.jsx';
import DropDown from './partials/DropDown.jsx';
import Cards from './partials/Cards.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
  const navigate = useNavigate();
  const [duration, setDuration] = useState("day");
  const [category, setCategory] = useState("all"); 
  const [trending, setTrending] = useState([]);
  const [page,setpage] = useState(1);
  const [hasMore,sethashMore] = useState(true);
  
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      //setTrending(data.results);
      if(data.results.length > 0){
      setTrending((prevState)=> [...prevState,...data.results]);
      setpage(page + 1);
      }else{
          sethashMore(false);
      }
    } catch (error) {
      console.error("Error fetching trending data:", error.response?.data || error.message);
    }
  };
 const refreshHandler = () => {
      if(trending.length === 0){
           GetTrending();
      }else{
          setpage(1);
          setTrending([]);
          GetTrending();
      }
 }
  useEffect(() => {
       refreshHandler();
  }, [category, duration]);

  return trending && trending.length > 0 ? (
    <div className="p-[4%] w-screen h-screen bg-[#1F1E24]">
      <div className="w-full flex items-center">
        <h1 className="text-2xl font-bold text-zinc-200">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl ri-arrow-left-line cursor-pointer"
          ></i>{" "}
          Trending
        </h1>
        <Topnav />
        <DropDown
          title="Trendings"
          options={["Tv", "Movie", "All"]}
          func={(value) => setCategory(value.toLowerCase())}
        />
        <div className="w-[2%]"></div>
        <DropDown
          title="Duration"
          options={["Day", "Week"]}
          func={(value) => setDuration(value.toLowerCase())}
        />
      </div>
      <InfiniteScroll 
         dataLength={trending.length}
         next={GetTrending}
         hasMore={hasMore}
         loader={<h4>Loading...</h4>}
      >
      <Cards data={trending} title={category}/>
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default Trending;
*/}
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav.jsx";
import axios from "../utils/Axios.jsx";
import DropDown from "./partials/DropDown.jsx";
import Cards from "./partials/Cards.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [duration, setDuration] = useState("day");
  const [category, setCategory] = useState("all");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching trending data:", error.response?.data || error.message);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending && trending.length > 0 ? (
    <div className="p-4 w-full min-h-screen bg-[#1F1E24]">
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-zinc-200 flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="text-2xl ri-arrow-left-line cursor-pointer"
            ></i>{" "}
            Trending
          </h1>
        </div>
        {/* Navigation and Filters */}
        <div className="flex flex-wrap items-center md:flex gap-4">
          <div className="md:flex mr-[25vw]">
            <Topnav />
          </div>
          <div className="flex ml-10 md:ml-[5vw]">
           <DropDown
            title="Trendings"
            options={["Tv", "Movie", "All"]}
            func={(value) => setCategory(value.toLowerCase())}
          />
          <DropDown
            title="Duration"
            options={["Day", "Week"]}
            func={(value) => setDuration(value.toLowerCase())}
          />
          </div>

        </div>
      </div>

      {/* Trending Content */}
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h4 className="text-center text-white">Loading...</h4>}
        className="mt-4"
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default Trending;

