import { combineReducers } from 'redux';

import familyGroups from './familyGroupsReducer';
import familyGroup from './familyGroupReducer';
import schedule from './scheduleReducer';

export default combineReducers({
    familyGroups,
    familyGroup,
    schedule,
});
