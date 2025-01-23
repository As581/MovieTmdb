import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/Axios.jsx';
import Topnav from './partials/Topnav.jsx';
import DropDown from './partials/DropDown.jsx';
import Cards from './partials/Cards.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';

function Popular (){
  const navigate = useNavigate();
const [category, setCategory] = useState("movie");
const [popular, setPopular] = useState([]);
const [page, setPage] = useState(1);
const [hasMore, sethasMore] = useState(true);
const GetPopular = async () => {
  try {
    const { data } = await axios.get(`/${category}/popular?page=${page}`);
    
    if (data.results.length > 0) {
      setPopular((prevState) => [...prevState, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } else {
      sethasMore(false);
    }
  } catch (error) {
    console.error("Error fetching popular data:", error.response?.data || error.message);
  }
};

const refreshHandler = () => {
  setPage(1);
  setPopular([]);
  sethasMore(true);
  GetPopular(); // Reset ke baad data fetch karo
};

useEffect(() => {
  refreshHandler();
}, [category]);

    

  
  return popular && popular.length > 0 ? (
    <div className="p-4 w-full min-h-screen bg-[#1F1E24]">
      
      
      {/*<div className="w-full flex items-center gap-2">
        <h1 className="text-2xl font-bold text-zinc-200">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl ri-arrow-left-line cursor-pointer"
          ></i>{" "}
          Popular
        </h1>
        <Topnav />
        <DropDown
          title="Popular"
          options={["Tv", "Movie", "All"]}
          func={(value) => setCategory(value.toLowerCase())}
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
            Popular
          </h1>
        </div>
        {/* Navigation and Filters */}
        <div className="flex flex-wrap items-center md:flex gap-4">
          <div className="md:flex mr-[25vw] items-center ml-[10vw]">
            <Topnav />
          </div>
          <div className="flex ml-[25vw] md:ml-[5vw]">
           <DropDown
            title="Category"
            options={["Tv", "Movie", "All"]}
            func={(value) => setCategory(value.toLowerCase())}
          />
          </div>

        </div>
      </div>
      <InfiniteScroll 
         dataLength={popular.length}
         next={GetPopular}
         hasMore={hasMore}
         loader={<h4>Loading...</h4>}
      >
      <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
  
}

export default Popular;


