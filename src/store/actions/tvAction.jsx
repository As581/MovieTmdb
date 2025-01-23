export { removetv } from "../reducers/TvSlice.jsx";
import axios from "../../utils/Axios.jsx";
import { loadtv } from "../reducers/TvSlice.jsx";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    const translations = await axios.get(`/tv/${id}/translations`)
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
    dispatch(loadtv(theDetails));
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    // Optionally, dispatch an error action to the Redux store
    dispatch(loadtv({ error: error.message }));
  }
};
