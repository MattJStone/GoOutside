import { GET_FAMILY_GROUP } from '../common/constants';
import defaults from './initialState';

export default function (state = defaults.familyGroup, action) {
    switch (action.type) {
        case GET_FAMILY_GROUP:
            return action.familyGroup;

            default:
                return state;
    }
}
