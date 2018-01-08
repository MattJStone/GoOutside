const schedule = [{
    id: '000001',
    family: '00-000',
    days: [{
        id: 'Monday',
        allowedTime: 90,
        members: [{
            id: '00-002',
            displayName: 'Liv',
            usage: '0',
        }, {
            id: '00-003',
            displayName: 'Declan',
            usage: '0',
        }],
    }, {
        id: 'Tuesday',
        allowedTime: 90,
        members: [{
            id: '00-002',
            displayName: 'Liv',
            usage: '0',
        }, {
            id: '00-003',
            displayName: 'Declan',
            usage: '0',
        }],
    }, {
        id: 'Wednesday',
        allowedTime: 90,
        members: [{
            id: '00-002',
            displayName: 'Liv',
            usage: '30',
        }, {
            id: '00-003',
            displayName: 'Declan',
            usage: '20',
        }],
    }, {
        id: 'Thursday',
        allowedTime: 90,
        members: [{
            id: '00-002',
            displayName: 'Liv',
            usage: '0',
        }, {
            id: '00-003',
            displayName: 'Declan',
            usage: '0',
        }],
    }, {
        id: 'Friday',
        allowedTime: 90,
        members: [{
            id: '00-002',
            displayName: 'Liv',
            usage: '15',
        }, {
            id: '00-003',
            displayName: 'Declan',
            usage: '30',
        }],
    }, {
        id: 'Saturday',
        allowedTime: 180,
        members: [{
            id: '00-002',
            displayName: 'Liv',
            usage: '0',
        }, {
            id: '00-003',
            displayName: 'Declan',
            usage: '0',
        }],
    }, {
        id: 'Sunday',
        allowedTime: 180,
        members: [{
            id: '00-002',
            displayName: 'Liv',
            usage: '0',
        }, {
            id: '00-003',
            displayName: 'Declan',
            usage: '0',
        }],
    }],
}];

export const getSchedule = groupId => new Promise((resolve) => {
    console.log('getting schedule for ' + groupId);
    
    resolve(schedule.filter(sched => sched.family === groupId)[0]);
});
