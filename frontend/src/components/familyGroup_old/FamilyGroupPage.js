import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './familyStyles.css';

import * as familyGroupAction from '../../actions/familyGroupAction';
import FamilyGroupMembers from './FamilyGroupMembers';
import FamilyHeader from './FamilyHeader';
import SchedulePage from '../schedule/SchedulePage';


class FamilyGroupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedMember: '0',
    };

      this.handleMemberSelected = this.handleMemberSelected.bind(this);
  }


componentDidMount() {
    this.props.getFamilyGroup(this.props.match.params.familyGroupId); // eslint-disable-line
  }

  handleMemberSelected(memberId) {
      this.setState({ selectedMember: memberId });
  }


render() {
    const { familyGroup } = this.props;

    console.log(`current selected member: ${this.state.selectedMember}`);

    if (!familyGroup.members) return <div>loading...</div>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <FamilyHeader familyGroup={familyGroup} />
              </div>
              <div className="panel panel-body">
                <FamilyGroupMembers
                  parents={familyGroup.members.adults}
                  kids={familyGroup.members.kids}
                  onKidSelected={this.handleMemberSelected}
                />
              </div>
              <div>
                <SchedulePage familyId={this.props.familyGroup.id} memberId={this.state.selectedMember} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
}

FamilyGroupPage.propTypes = {
    familyGroup: PropTypes.object.isRequired,
    getFamilyGroup: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        familyGroup: state.familyGroup,
        schedule: state.schedule,
    };
}

export default connect(mapStateToProps, familyGroupAction)(FamilyGroupPage);
