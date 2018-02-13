import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleAPI } from 'react-google-oauth';

import Grid from 'material-ui-next/Grid';

import SignInForm from './SignInForm';
import * as actions from '../../actions/authActions';

class SignInPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            token: false,
            user: {},
        };

        this.signIn = this.signIn.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.updateGoogleSignStatus = this.updateGoogleSignStatus.bind(this);
        this.onGoogleInitFailure = this.onGoogleInitFailure.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    signIn(value) {
        console.log('Sign in initiated');
    }

    googleSignIn(res) {
        console.log('Sign in with google');

        console.log(res);

        this.props.signIn(res.tokenId);
    }

    updateGoogleSignStatus(status) {
        console.log(status);
        this.setState({ user: Object.assign({}, this.state.user, { oauth: 'google' }) });
    }

    onGoogleInitFailure(error) {
        console.log(error);
        this.setState({ user: Object.assign({}, this.state.user, { oauth: undefined }) });
    }

    render() {
        return (
          <Grid container justify="center">

            <SignInForm onSubmit={this.signIn} googleSignIn={this.googleSignIn} />

          </Grid>
        );
    }
}

SignInPage.propTypes = {
    signIn: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, actions)(withRouter(SignInPage));
