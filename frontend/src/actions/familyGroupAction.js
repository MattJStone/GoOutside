import { GET_FAMILY_GROUP, NEW_FAMILY_GROUP } from '../common/constants';
import * as goApi from '../mockedApi/familyGroupApi';


export function loadFamilyGroup(familyGroup) {
   return { type: GET_FAMILY_GROUP, familyGroup };
}


export function getFamilyGroup(id) {
    return function thunk(dispatch) {
        return goApi.getGroup(id).then((familyGroup) => {
            dispatch(loadFamilyGroup(familyGroup.recordsets));
        }).catch((err) => {
            throw (err);
        });
    };
}

