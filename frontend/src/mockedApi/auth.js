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
