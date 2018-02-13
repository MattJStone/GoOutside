import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as familyGroupActions from '../../actions/familyGroupsAction';
import FamilyGroupList from './FamilyGroupsList';
import PageHeader from '../../common/PageHeading';


class FamilyGroupsPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            familyGroups: [],
        };
    }

    componentDidMount() {
        console.log('Family group page is mounted');
        if (this.props.user.signedIn) {
            this.props.getFamilyGroups();
        } else {
            // redirect to the sign in page to authenticate the user
            this.props.history.push('/signin');
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.familyGroups !== this.state.familyGroups) {
            this.setState({ familyGroups: nextProps.familyGroups });
        }

        if (!nextProps.user.signedIn && this.props.user.signedIn) {
            this.setState({ familyGroups: [] });
            this.props.history.push('/signin');
        }
    }

    render() {
        const { familyGroups } = this.state;

        if (familyGroups.length === 0) return <div>loading...</div>;
        
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
    history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        familyGroups: state.familyGroups,
        user: state.user,
    };
}

export default connect(mapStateToProps, familyGroupActions)(withRouter(FamilyGroupsPage));
