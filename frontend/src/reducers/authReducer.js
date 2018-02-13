import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from '../common/constants';
import defaults from './initialState';

export default function (state = defaults.user, action) {
    switch (action.type) {
        case GOOGLE_SIGN_IN:
            return { ...state, user: action.payload, signedIn: action.payload !== undefined };

        case GOOGLE_SIGN_OUT:
            return defaults.user;

        default:
            return state;
    }
}
