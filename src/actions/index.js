import { FETCH_SEASON, CHANGE_YEAR, CHANGE_SEASON } from './types';
import jikan from '../apis/jikan';

export const fetchSeason = (year = 2019, season = 'fall') => async dispatch => {
    const response = await jikan.get(`/season/${year}/${season}`);
    dispatch({ type: FETCH_SEASON, payload: response.data });
};

export const changeYear = year => {
    return { type: CHANGE_YEAR, payload: year };
};

export const changeSeason = season => {
    return { type: CHANGE_SEASON, payload: season };
};
