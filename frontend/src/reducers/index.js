import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';


import familyGroups from './familyGroupsReducer';
import familyGroup from './familyGroupReducer';
import schedule from './scheduleReducer';
import user from './authReducer';


export default combineReducers({
    familyGroups,
    familyGroup,
    schedule,
    user,
    form,
});
