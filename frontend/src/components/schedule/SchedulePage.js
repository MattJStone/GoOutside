import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VictoryLabel, VictoryPie } from 'victory';
import moment from 'moment';

import './schedule.css';

import * as scheduleActions from '../../actions/scheduleAction';
import Days from './Days';

const getToday = (schedule) => {
    const currentDay = moment().format('dddd');

    return schedule.days.filter(day => day.id === currentDay)[0];
  };


class SchedulePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            schedule: [],

        };

        this.setDefaultSchedule = this.setDefaultSchedule.bind(this);
        this.formatDayData = this.formatDayData.bind(this);
        this.getUsage = this.getUsage.bind(this);
    }

    componentDidMount() {
        this.props.getSchedule(this.props.familyId, this.props.memberId);
      }

      setDefaultSchedule(propsSchedule) {
          const { schedule } = propsSchedule || this.state.schedule;

          this.setState({ schedule });
      }

      getUsage(day) {
        if (day.members.length === 0) return 0;

        if (this.props.memberId === '0') {
            return 0;
        }
        console.log(day.allowedTime);
        console.log(day.members.filter(member => member.id === this.props.memberId)[0].usage);
          return parseInt(day.members.filter(member => member.id === this.props.memberId)[0].usage, 8);
      }

      formatDayData(day) {
          return ([
                { x: 1, y: this.getUsage(day), label: 'used' },
                { x: 2, y: day.allowedTime, label: 'remaining' },
            ]);
      }

    render() {
        console.log(this.props.schedule);

        return (

          <div className="row">
            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel panel-heading">Today's screen time</div>
                <div className="panel panel-body">
                  <VictoryPie
                    data={this.formatDayData(getToday(this.props.schedule))}
                    innerRadius={90}
                    animate={{ duration: 1000 }}
                    colorScale="qualitative"
                    title="test"
                  />

                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="panel panel-default">
                <div className="panel panel-heading">Schedule</div>
                <div className="panel panel-body">

                  <Days scheduleDays={this.props.schedule.days} memberId={this.props.memberId} />

                </div>
              </div>
            </div>
          </div>
        );
    }
}
// {this.props.familyGroups.map(this.familyGroup)}
SchedulePage.propTypes = {
    schedule: PropTypes.object.isRequired,
    memberId: PropTypes.string,
    familyId: PropTypes.string.isRequired,
    getSchedule: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        schedule: state.schedule,
    };
}

export default connect(mapStateToProps, scheduleActions)(SchedulePage);

