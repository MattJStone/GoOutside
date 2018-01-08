import { GET_SCHEDULE } from '../common/constants';
import * as goApi from '../mockedApi/scheduleApi';


export function loadSchedule(schedule) {
   return { type: GET_SCHEDULE, schedule };
}


export function getSchedule(familyId) {
    return function thunk(dispatch) {
        return goApi.getSchedule(familyId).then((schedule) => {
            dispatch(loadSchedule(schedule));
        }).catch((err) => {
            throw (err);
        });
    };
}
