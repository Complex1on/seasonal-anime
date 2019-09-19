import { CHANGE_SEASON, CHANGE_YEAR } from '../actions/types';

export default (state = { season: 'Fall', year: 2019 }, action) => {
    switch (action.type) {
        case CHANGE_SEASON:
            return { ...state, season: action.payload };
        case CHANGE_YEAR:
            return { ...state, year: action.payload };
        default:
            return state;
    }
};
