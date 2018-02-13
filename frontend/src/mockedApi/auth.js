import axios from 'axios';

// const GoogleAuth = require('google-auth-library');

const users = [{
    id: '00-001',
    login: 'matt.stone77@gmail.com',
    displayName: 'Matt',
    isAdult: true,
    image: 'http://4.bp.blogspot.com/_kJaweK-o0Yw/TOqasDb_6LI/AAAAAAAAAB8/C1B0xfFlZpI/s1600/The%2BIncredibles-001.jpg',
}, {
    id: '00-010',
    login: 'matt.stone77@gmail.com',
    oauth: 'google',
    displayName: 'Matt',
    isAdult: true,
    image: 'http://4.bp.blogspot.com/_kJaweK-o0Yw/TOqasDb_6LI/AAAAAAAAAB8/C1B0xfFlZpI/s1600/The%2BIncredibles-001.jpg',
}];

export const getAll = () => new Promise((resolve) => {
    resolve({ recordsets: users });
});

export const get = req => new Promise((resolve) => {
    resolve({ recordsets: users.find(user => user.id === req.userId) });
});

export const signIn = req => new Promise((resolve) => {
    resolve({
 recordsets: users.find(user => user.login === req.login
        && user.oauth === req.oauth),
});
});

export const googleSignIn = req => new Promise((resolve, reject) => {
    // Confirm the token with google
    // TODO: Move this into a config file:
    const ourId = '271043031369-oagnkm1jgea0qgn8mk33fcdf1407pu4n.apps.googleusercontent.com';
     axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.headers.Authorization}`)

        .then((response) => {
            console.log('validated');
            console.log(response);
            if (response.data.aud !== ourId) {
                reject({ code: 401, message: 'Invalid google token detected' });
                // TODO: log this as an attempted confused deputy attack
                return;
            }

            // Does this user exist in our system


            // Cache the token so we don't need to hit google again for a little while


            // Return the user details and allow them to log in            
            resolve({
                id: '00-001',
                displayName: response.data.name,
                firstname: 'Matt',
                surname: 'Stone',
                email: 'matt.stone77@gmail.com',
                picture: response.data.picture,                
            });
        })
        .catch((error) => {
            console.log(error);
        });
});
/*

export const googleSignInYolo = token => new Promise((resolve, reject) => {
    // TODO: Move this into a config file:
    const ourId = '271043031369-oagnkm1jgea0qgn8mk33fcdf1407pu4n.apps.googleusercontent.com';

    resolve();

    const auth = new GoogleAuth();
    const client = new auth.OAuth2(ourId, '', '');
    client.verifyIdToken(
        token,
        ourId,

        (e, login) => {
            if (e) return reject(e);

            const payload = login.getPayload();
            const userid = payload.sub;
            console.log(payload);

            return resolve(payload);
        },


    );
});
*/
