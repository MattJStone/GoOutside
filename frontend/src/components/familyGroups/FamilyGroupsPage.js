import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as familyGroupActions from '../../actions/familyGroupsAction';
import FamilyGroupList from './FamilyGroupsList';
import PageHeader from '../../common/PageHeading';


class FamilyGroupsPage extends Component {
    componentDidMount() {
        if (this.props.user) {
            this.props.getFamilyGroups();
        } else {
            // redirect to the sign in page to authenticate the user
            this.props.history.push('/signin');
        }
      }


    render() {
        const { familyGroups } = this.props;

        if (!familyGroups) return <div>loading...</div>;

        familyGroups.push({ id: 'empty', name: 'Create a new family to control!' });

        return (
          <div>
            <PageHeader
              title="Family Groups"
              subHeading={familyGroups.length > 0
                    ? 'Here are all the families you are a member of.'
                    : 'Wow! Such empty. You need to start a family...'}
            />


            <FamilyGroupList familyGroups={familyGroups} />

          </div>
        );
    }
}
// {this.props.familyGroups.map(this.familyGroup)}
FamilyGroupsPage.propTypes = {
    familyGroups: PropTypes.array.isRequired,
    getFamilyGroups: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        familyGroups: state.familyGroups,

    };
}

export default connect(mapStateToProps, familyGroupActions)(withRouter(FamilyGroupsPage));
