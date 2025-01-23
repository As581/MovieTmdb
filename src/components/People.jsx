import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/Axios.jsx';
import Topnav from './partials/Topnav.jsx';
import DropDown from './partials/DropDown.jsx';
import Cards from './partials/Cards.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';


function People (){
  
  const navigate = useNavigate();
const [category, setCategory] = useState("popular");
const [person, setPerson] = useState([]);
const [page, setPage] = useState(1);
const [hasMore, sethasMore] = useState(true);

const GetPerson= async () => {
  try {
    const { data } = await axios.get(`/person/${category}?page=${page}`);
    console.log(data.results);
    if (data.results.length > 0) {
      setPerson((prevState) => [...prevState, ...data.results]);
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
  setPerson([]);
  sethasMore(true);
  GetPerson(); // Reset ke baad data fetch karo
};

useEffect(() => {
  refreshHandler();
}, [category]);


return person && person.length > 0 ? (
    <div className="p-[4%] w-screen h-screen bg-[#1F1E24]">
      
      
      
      {/*}<div className="w-full flex items-center">
        <h1 className="text-2xl font-bold text-zinc-200">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl ri-arrow-left-line cursor-pointer"
          ></i>{" "}
          People
        </h1>
        <Topnav />
        <div className="w-[2%]"></div>
      </div>*/}
      
      
      
      
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-zinc-200 flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="text-2xl ri-arrow-left-line cursor-pointer"
            ></i>{" "}
            People
          </h1>
        </div>
        {/* Navigation and Filters */}
        <div className="flex flex-wrap items-center md:flex gap-4">
          <div className="md:flex mr-[25vw]">
            <Topnav />
          </div>
        </div>
      </div>
      <div className="mr-5">
              <InfiniteScroll 
         dataLength={person.length}
         next={GetPerson}
         hasMore={hasMore}
         loader={<h4>Loading...</h4>}
      >
      <Cards data={person} title="person" />
      </InfiniteScroll>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
    );

}

export default People;