
exports.getFamily = async function getFamily(req) {
    req.log.warn('GETTING DUMMY FAMILY');

    return ({
        id: 1,
        name: 'Stone Family'

    });
};
