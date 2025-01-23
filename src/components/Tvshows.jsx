import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios.jsx";
import Topnav from "./partials/Topnav.jsx";
import DropDown from "./partials/DropDown.jsx";
import Cards from "./partials/Cards.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

function Tvshows() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      setTv((prevState) => [...prevState, ...data.results]);
      setPage((prevPage) => prevPage + 1);
      if (data.results.length === 0) {
        sethasMore(false);
      }
    } catch (error) {
      console.error("Error fetching TV shows:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    setPage(1);
    setTv([]);
    sethasMore(true);
    GetTv();
  }, [category]);

  return tv && tv.length > 0 ? (
    <div className="p-[4%] w-screen h-screen bg-[#1F1E24]">
      
      
      
      
      {/*}<div className="w-full flex items-center">
        <h1 className="text-2xl font-bold text-zinc-200">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl ri-arrow-left-line cursor-pointer"
          ></i>{" "}
          Tv({category})
        </h1>
        <Topnav />
        <DropDown
          title="TvShows"
          options={["Popular", "airing_today", "On_The_Air"]}
          func={(value) => setCategory(value)}
        />
        <div className="w-[2%]"></div>
      </div>*/}
      
      
      
     <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-zinc-200 flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="text-2xl ri-arrow-left-line cursor-pointer"
            ></i>{" "}
            Tv({category})
          </h1>
        </div>
        
        {/* Navigation and Filters */}
        <div className="flex flex-wrap items-center md:flex gap-4">
          <div className="md:flex mr-[25vw] items-center ml-[10vw]">
            <Topnav />
          </div>
          <div className="flex ml-[25vw] md:ml-[5vw]">
           <DropDown
            title="TvShows"
            options={["Popular", "airing_today", "On_The_Air"]}
            func={(value) => setCategory(value.toLowerCase())}
          />
          </div>

        </div>
      </div>
          
      <div className="mr-5">
         <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={tv} title="tv"/>
      </InfiniteScroll>
      </div>

    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default Tvshows;
