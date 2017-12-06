const model = require('./family.model');

exports.getFamily = async function getFamily(req) {
    try {
        const result = await model.getFamily(req);
        return result;
    } catch (err) {        
        return err;
    }
};
