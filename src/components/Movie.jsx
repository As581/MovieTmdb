{/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/Axios.jsx';
import Topnav from './partials/Topnav.jsx';
import DropDown from './partials/DropDown.jsx';
import Cards from './partials/Cards.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';


function Movie (){
  const navigate = useNavigate();
const [category, setCategory] = useState("now_playing");
const [movie, setMovie] = useState([]);
const [page, setPage] = useState(1);
const [hasMore, sethasMore] = useState(true);

const GetMovie = async () => {
  try {
    const { data } = await axios.get(`/movie/${category}?page=${page}`);
   // console.log("movie resuly",data.results);
    if (data.results.length > 0) {
      setMovie((prevState) => [...prevState, ...data.results]);
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
  setMovie([]);
  sethasMore(true);
  GetMovie(); // Reset ke baad data fetch karo
};

useEffect(() => {
  refreshHandler();
}, [category]);


return movie && movie.length > 0 ? (
    <div className="p-[4%] w-screen h-screen bg-[#1F1E24]">
      <div className="w-full flex items-center">
        <h1 className="text-2xl font-bold text-zinc-200">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl ri-arrow-left-line cursor-pointer"
          ></i>{" "}
          Movie({category})
        </h1>
        <Topnav />
        <DropDown
          title="Movie"
          options={["Popular","top_rated","now_playing","upcoming"]}
          func={(value) => setCategory(value.toLowerCase())}
        />
        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll 
         dataLength={movie.length}
         next={GetMovie}
         hasMore={hasMore}
         loader={<h4>Loading...</h4>}
      >
  <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
    );

}

export default Movie;
*/}
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/Axios.jsx';
import Topnav from './partials/Topnav.jsx';
import DropDown from './partials/DropDown.jsx';
import Cards from './partials/Cards.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';

function Movie() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const GetMovie = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setMovie([]);
    sethasMore(true);
    GetMovie();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return (
    <div className="p-4 w-full min-h-screen bg-[#1F1E24]">
      {/* Header Section */}
      
      {/*}<div className="w-full flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center">
          <h1 className="text-xl lg:text-2xl font-bold text-zinc-200 flex items-center md:text-1xl">
            <i
              onClick={() => navigate(-1)}
              className="text-xl lg:text-2xl ri-arrow-left-line cursor-pointer mr-2 md:text-1xl"
            ></i>
            Movie({category})
          </h1>
        </div>
        
        
        <div className="flex flex-wrap gap-4 items-center mt-4 lg:mt-0">
          <Topnav />
          <DropDown
            title="Movie"
            options={["Popular", "top_rated", "now_playing", "upcoming"]}
            func={(value) => setCategory(value.toLowerCase())}
          />
        </div>
        
        
      </div>*/}
      
      
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-zinc-200 flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="text-2xl ri-arrow-left-line cursor-pointer"
            ></i>{" "}
            Movie({category})
          </h1>
        </div>
        
        {/* Navigation and Filters */}
        <div className="flex flex-wrap items-center md:flex gap-4">
          <div className="md:flex mr-[25vw] items-center ml-[10vw]">
            <Topnav />
          </div>
          <div className="flex ml-[25vw] md:ml-[5vw]">
           <DropDown
            title="Movie"
            options={["Popular", "top_rated", "now_playing", "upcoming"]}
            func={(value) => setCategory(value.toLowerCase())}
          />
          </div>

        </div>
      </div>
      

      {/* Infinite Scroll Section */}
      {movie && movie.length > 0 ? (
        <InfiniteScroll
          dataLength={movie.length}
          next={GetMovie}
          hasMore={hasMore}
          loader={
            <div className="text-center text-white">
              <h4>Loading...</h4>
            </div>
          }
        >
          <Cards data={movie} title="movie" />
        </InfiniteScroll>
      ) : (
        <div className="w-full h-screen flex items-center justify-center text-white">
          Loading...
        </div>
      )}
    </div>
  );
}

export default Movie;
