import { FETCH_SEASON } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SEASON:
            return action.payload;
        default:
            return state;
    }
};
