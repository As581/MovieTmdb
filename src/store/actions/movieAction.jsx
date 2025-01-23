export { removemovie } from "../reducers/MovieSlice.jsx";
import axios from "../../utils/Axios.jsx";
import { loadmovie } from "../reducers/MovieSlice.jsx";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    const translations = await axios.get(`/movie/${id}/translations`)
    const theDetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results || [],
      similar: similar.data.results || [],
      videos: videos.data.results.find((m) => m.type === "Trailer") || null,
      watchproviders: watchproviders.data.results?.IN || null,
      translations: translations.data.translations.map((t)=> t.english_name)
    };
    console.log("videos",theDetails.videos);
    dispatch(loadmovie(theDetails));
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    // Optionally, dispatch an error action to the Redux store
    dispatch(loadmovie({ error: error.message }));
  }
};
