import { FETCH_SEASON, CHANGE_YEAR, CHANGE_SEASON } from './types';
import jikan from '../apis/jikan';

// For fetching anime season / year combo
export const fetchSeason = (year = 2019, season = 'fall') => async dispatch => {
    const response = await jikan.get(`/season/${year}/${season.toLowerCase()}`);
    dispatch({ type: FETCH_SEASON, payload: response.data });
};

// Changing year
export const changeYear = year => {
    return { type: CHANGE_YEAR, payload: year };
};

// Changing season
export const changeSeason = season => {
    return { type: CHANGE_SEASON, payload: season };
};
