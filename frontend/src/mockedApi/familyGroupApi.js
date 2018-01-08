const families = [{
    id: '00-000',
    name: 'The Stone Family - Five Dock',
    members: {
        adults: [{
            id: '00-000',
            displayName: 'Matt (Big Daddy) Stone',
            image: 'http://4.bp.blogspot.com/_kJaweK-o0Yw/TOqasDb_6LI/AAAAAAAAAB8/C1B0xfFlZpI/s1600/The%2BIncredibles-001.jpg',
        }, {
            id: '00-001',
            displayName: 'Sam (Hot Mamma) Stone',
            image: 'http://img.lum.dolimg.com/v1/images/open-uri20150422-20810-1lgd3tr_6ad74569.jpeg',
        }],
        kids: [{
            id: '00-002',
            displayName: 'Liv',
            image: 'https://lumiere-a.akamaihd.net/v1/images/image_bc9e857a.jpeg',
        }, {
            id: '00-003',
            displayName: 'Declan',
            image: 'http://img.lum.dolimg.com/v1/images/image_a06c7e90.jpeg',
        }],
    },
}, {
    id: '00-001',
    name: 'The Murphy Family - Berorwa Heights',
    members: {
        adults: [{
            id: '00-004',
            displayName: 'Greg (Poppy) Murphy',
            image: 'http://www.picgifs.com/disney-gifs/disney-gifs/up/disney-graphics-up-590584.jpg',
        }, {
            id: '00-005',
            displayName: 'Wendy (Nonna) Murphy',
            image: 'https://vignette.wikia.nocookie.net/pixar/images/6/6f/Ellie_up.png/revision/latest/scale-to-width-down/282?cb=20110428124719',
        }],
        kids: [{
            id: '00-002',
            displayName: 'Liv',
            image: 'https://lumiere-a.akamaihd.net/v1/images/image_bc9e857a.jpeg',
        }, {
            id: '00-003',
            displayName: 'Declan',
            image: 'http://img.lum.dolimg.com/v1/images/image_a06c7e90.jpeg',
        }],
    },
}];


export const getAll = () => new Promise((resolve) => {
    resolve({ recordsets: families });
});

export const getGroup = groupId => new Promise((resolve) => {
    resolve({ recordsets: families.filter(family => family.id === groupId)[0] });
});


export const post = () => new Promise((resolve, reject) => {
    reject(new Error('Not implemented'));
});
