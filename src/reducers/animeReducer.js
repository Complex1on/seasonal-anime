import { FETCH_SEASON } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SEASON:
            return {
                ...state,
                season_name: action.payload.season_name,
                season_year: action.payload.season_year,
                anime: action.payload.anime
            };
        default:
            return state;
    }
};
