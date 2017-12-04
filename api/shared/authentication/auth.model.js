

module.exports.getProfile = req => new Promise((resolve, reject) => {
    req.log.warn('getProfile is stubbed to return a dummy valid user');

    resolve({
        id: '22d5decc-1773-4ade-97e7-bcd20f2fbaa9',
        login: 'user1@gmail.com',
        familyId: 'ffccc004-626f-4a21-805e-1bd56409891d',
        family: 'Default Family Group',
        role: 1,
        sessionId: undefined // '8cbd39a4-7fb0-43bf-befa-2207d84b0d4a'
    });
});