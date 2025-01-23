export { removeperson } from "../reducers/PersonSlice.jsx";
import axios from "../../utils/Axios.jsx";
import { loadperson } from "../reducers/PersonSlice.jsx";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
    const tvcredits = await axios.get(`/person/${id}/tv_credits`);
    const moviedcredits = await axios.get(`/person/${id}/movie_credits`);
    
    const theDetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedcredits:combinedcredits.data,
      tvcredits:tvcredits.data,
      moviedcredits:moviedcredits.data,
    };
    console.log(theDetails);
    dispatch(loadperson(theDetails));
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    // Optionally, dispatch an error action to the Redux store
    dispatch(loadperson({ error: error.message }));
  }
};
