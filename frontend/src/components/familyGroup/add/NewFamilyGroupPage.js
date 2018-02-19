import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Dialog, { DialogContent,  DialogTitle } from 'material-ui-next/Dialog';

import NewFamilyGroupForm from './NewFamilyGroupForm';
import * as actions from '../../../actions/authActions';


class NewFamilyGroupPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {

        };
    }

    componentDidMount() {
        if (!this.props.user.signedIn) {
            // redirect to the sign in page to authenticate the user
            this.props.history.push('/signin/addFamily');
        }
      }

    render() {
        return (
          <Dialog
            fullWidth
            open={this.props.showModal}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Start a new family</DialogTitle>
            <DialogContent>
              <NewFamilyGroupForm userInfo={this.props.user} />
            </DialogContent>

          </Dialog>
/*
          <div>
            <PageHeader
              title="Start a new family"
              subHeading="Starting a new family is easy... just add the adults, mix in some kids and allocate them screen time. Painless?"
            />
            <div>

            </div>
          </div> */
        );
    }
}

NewFamilyGroupPage.propTypes = {
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    showModal: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, actions)(withRouter(NewFamilyGroupPage));
