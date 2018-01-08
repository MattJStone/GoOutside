import { GET_SCHEDULE } from '../common/constants';
import defaults from './initialState';

export default function (state = defaults.schedule, action) {
    switch (action.type) {
        case GET_SCHEDULE:
            return action.schedule || state;

            default:
                return state;
    }
}
