import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Grid from 'material-ui-next/Grid';

import SignInForm from './SignInForm';
import * as actions from '../../actions/familyGroupAction';

class SignInPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            token: false,
            user: {},
        };

        this.signIn = this.signIn.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    signIn(value) {
        console.log('Sign in initiated');
    }

    render() {
        return (
          <Grid container justify="center">
            <SignInForm onSubmit={this.signIn} />
          </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, actions)(withRouter(SignInPage));
