import { GET_FAMILY_GROUPS } from '../common/constants';
import defaults from './initialState';

export default function (state = defaults.familyGroups, action) {
    switch (action.type) {
        case GET_FAMILY_GROUPS:
            return action.familyGroups;

            default:
                return state;
    }
}
