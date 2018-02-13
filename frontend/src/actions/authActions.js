import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from '../common/constants';
import * as goApi from '../mockedApi/auth';

const signedIn = data => ({ type: GOOGLE_SIGN_IN, data });


export function signIn(token) {
    return function thunk(dispatch) {
        console.log(`auth action ${token}`);

        const req = {
            headers: {
                Authorization: token,
            },
        };

        return goApi.googleSignIn(req).then((info) => {
            dispatch(signedIn(info));
        }).catch((err) => {
            throw (err);
        });
    };
}

export function signInYolo(token) {
    return function thunk(dispatch) {
        const req = {
            headers: {
                Authorization: token,
            },
        };

        return goApi.googleSignIn(req).then((info) => {
            dispatch({ type: GOOGLE_SIGN_IN, payload: info });
        }).catch((err) => {
            throw (err);
        });
    };
}

export function signOut() {
    return function thunk(dispatch) {
    // TODO: Sign the user out of the system

            console.log('user sign out');
            dispatch({ type: GOOGLE_SIGN_OUT });
    };
}

