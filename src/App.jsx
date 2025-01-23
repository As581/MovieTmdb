 {/*import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Trending from './components/Trending.jsx';
import Popular from './components/Popular.jsx';
import Movie from './components/Movie.jsx';
import Tvshows from './components/Tvshows.jsx';
import Person from './components/People.jsx';
import PersonDetail from './components/PersonDetails';
import TvDetail from './components/TvDetails';
import MovieDetail from './components/MovieDetails';
import Trailer from './components/partials/Trailer.jsx';
function App() {

  return (
    
<div className="bg-[#1F1E24] w-screen h-screen flex">
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          
          <Route path="/movie" element={<Movie />}></Route>
        <Route path="/movie/details/:id" element={<MovieDetail />}>
       <Route path="/movie/details/:id/Trailer" element={<Trailer />}></Route>
          </Route>
          
      <Route path="/tv" element={<Tvshows />}></Route>
      <Route path="/tv/details/:id" element={<TvDetail />}>
      <Route path="/tv/details/:id/Trailer" element={<Trailer />}></Route>
      </Route>
     <Route path="/person" element={<Person  />}></Route>
    <Route path="/person/details/:id" element={<PersonDetail />}></Route>
        </Routes>
    </div>
  )
}
export default App;
*/}
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Trending from './components/Trending.jsx';
import Popular from './components/Popular.jsx';
import Movie from './components/Movie.jsx';
import Tvshows from './components/Tvshows.jsx';
import Person from './components/People.jsx';
import PersonDetail from './components/PersonDetails';
import TvDetail from './components/TvDetails';
import MovieDetail from './components/MovieDetails';
import Trailer from './components/partials/Trailer.jsx';

function App() {
  return (
    <div className="bg-[#1F1E24] min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      {/* Header (if needed) */}
      <header className="w-full py-4 px-6 bg-[#2C2C34] text-white flex justify-between items-center shadow-md md:px-12">
        {/*<h1 className="text-lg font-bold md:text-2xl">Movie App</h1>*/}
        {/* Add navigation links if needed */}
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 px-4 py-6 md:px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<MovieDetail />}>
            <Route path="/movie/details/:id/Trailer" element={<Trailer />} />
          </Route>
          <Route path="/tv" element={<Tvshows />} />
          <Route path="/tv/details/:id" element={<TvDetail />}>
            <Route path="/tv/details/:id/Trailer" element={<Trailer />} />
          </Route>
          <Route path="/person" element={<Person />} />
          <Route path="/person/details/:id" element={<PersonDetail />} />
        </Routes>
      </main>

      {/* Footer (if needed) 
      <footer className="w-full py-4 bg-[#2C2C34] text-white text-center">
        <p className="text-sm md:text-base">© 2025 Movie App. All rights reserved.</p>
      </footer>
      */}
    </div>
  );
}

export default App;
