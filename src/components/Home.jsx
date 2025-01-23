{/*import React, { useState, useEffect } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import DropDown from './partials/DropDown';
import axios from '../utils/Axios.jsx';

function Home() {
  document.title = "FETCH || HOMEPAGE";

  const [wallpaper, setWallpaper] = useState([]);
  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState("all");

  const GetHeaderWall = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      if (data.results?.length > 0) {
        let random = data.results[Math.floor(Math.random() * data.results.length)];
        setWallpaper(random);
      } else {
        console.log("No results found!");
      }
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  const GetHorizontal = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setCards(data.results);
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    GetHeaderWall();
  }, []);

  useEffect(() => {
    GetHorizontal();
  }, [category]);

  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-hidden overflow-y-auto">
        <Topnav />
        <Header data={wallpaper} />
        <div className="p-5 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-white">Trendings</h1>
          <DropDown
            title="Filter"
            options={["Tv", "Movie", "All"]}
            func={(value) => setCategory(value)} // Proper value handle
          />
        </div>
        <HorizontalCards data={cards} />
      </div>
    </>
  );
}

export default Home;
*/}



import React, { useState, useEffect } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import axios from "../utils/Axios.jsx";

function Home() {
  document.title = "FETCH || HOMEPAGE";

  const [wallpaper, setWallpaper] = useState([]);
  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState("all");

  const GetHeaderWall = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      if (data.results?.length > 0) {
        let random = data.results[Math.floor(Math.random() * data.results.length)];
        setWallpaper(random);
      } else {
        console.log("No results found!");
      }
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  const GetHorizontal = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setCards(data.results);
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    GetHeaderWall();
  }, []);

  useEffect(() => {
    GetHorizontal();
  }, [category]);

  return (
    <div className="flex flex-col lg:flex-row bg-[#1F1E24] h-full">

      <Sidenav className="w-full lg:w-1/5 h-auto lg:h-full bg-[#2C2C34]" />


      <div className="w-full lg:w-4/5 h-full overflow-hidden overflow-y-auto">
      
        <Topnav className="sticky top-0 z-10 bg-[#2C2C34] shadow-md" />

        <Header data={wallpaper} />

        <div className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold text-white">Trendings</h1>
          <DropDown
            title="Filter"
            options={["Tv", "Movie", "All"]}
            func={(value) => setCategory(value)} // Proper value handle
          />
        </div>

        <HorizontalCards data={cards} />
      </div>
    </div>
  );
}

export default Home;



