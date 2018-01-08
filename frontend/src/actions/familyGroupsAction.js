import { GET_FAMILY_GROUPS } from '../common/constants';
import * as goApi from '../mockedApi/familyGroupApi';


export function loadFamilyGroups(familyGroups) {
   return { type: GET_FAMILY_GROUPS, familyGroups };
}


export function getFamilyGroups() {
    return function thunk(dispatch) {
        return goApi.getAll().then((familyGroups) => {
            dispatch(loadFamilyGroups(familyGroups.recordsets));
        }).catch((err) => {
            throw (err);
        });
    };
}
