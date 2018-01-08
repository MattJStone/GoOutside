import React from 'react';
import PropTypes from 'prop-types';
import { VictoryPie, VictoryTooltip } from 'victory';


const getUsage = (day, memberId) => {
  if (day.members.length === 0) return 0;

  if (memberId === '0') {
    return 0;
  }

  return parseInt(day.members.filter(member => member.id === memberId)[0].usage, 8);
};

const formatDayData = (day, memberId) => ([{
      x: 1,
      y: getUsage(day, memberId),
      label: 'Last used',
    },
    {
      x: 2,
      y: day.allowedTime,
      label: `Scheduled ${day.allowedTime} minutes`,
    },
  ]);


const renderDay = (day, memberId) => {
  const test = { height: '40px' };
  return (
    <li className="list-inline-item" key={day.id} >
      <div className="days">
        {day.id}
      </div>
      <VictoryPie
        data={formatDayData(day, memberId)}
        style={{ parent: { maxWidth: '150px' } }}
        innerRadius={80}
        labelComponent={<rc style={test} />}
      />
    </li>
  );
};

const Days = ({ scheduleDays = [], memberId = 0 }) => (
  <div className="col-md-12">
    <ul className="list-inline">
      {scheduleDays.map(day => renderDay(day, memberId))}
    </ul>

  </div>
);

Days.propTypes = {
    scheduleDays: PropTypes.array.isRequired,
    memberId: PropTypes.string.isRequired,
};


export default Days;

