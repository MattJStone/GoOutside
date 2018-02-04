import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as familyGroupActions from '../../actions/familyGroupsAction';
import FamilyGroupList from './FamilyGroupsList';

class FamilyGroupsPage extends Component {
    componentDidMount() {
        this.props.getFamilyGroups();
      }


    render() {
        const { familyGroups } = this.props;

        if (!familyGroups) return <div>loading...</div>;


        return (
          <div>
            <h1>Family Groups</h1>            
            <div>
              <FamilyGroupList familyGroups={familyGroups} />
            </div>
          </div>
        );
    }
}
// {this.props.familyGroups.map(this.familyGroup)}
FamilyGroupsPage.propTypes = {
    familyGroups: PropTypes.array.isRequired,
    getFamilyGroups: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        familyGroups: state.familyGroups,
    };
}

export default connect(mapStateToProps, familyGroupActions)(FamilyGroupsPage);
