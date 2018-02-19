import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';

import * as actions from '../../actions/authActions';
import Typography from 'material-ui-next/Typography';


class SignInPage extends Component {
    constructor(props) {
        super(props);
        window.authCallback = this.authCallback.bind(this);
    }

     /**
     * On load, invoke the callback from the platform.js script tag
     */
    authCallback() {
        console.log('authCallback');
      /*  this.renderLoginButton().then(() => {
            console.log('redirect to the landing page');
        }).catch(() => {
            console.log('start yolo');
            this.initYolo();
        });*/
    }

    /**
     * First, attempt to render the Google Sign In button
     * On success -> authenticate using the User ID token
     * On failure -> initialise the Google 'Yolo' Sign In/Register prompt
     * @returns {Promise}
     */
    renderLoginButton() {
        return new Promise((resolve, reject) => {
            window.gapi.signin2.render('my-signin2', {
                scope: 'profile email',
                width: 240,
                height: 50,
                longtitle: true,
                theme: 'dark',
                onsuccess: (user) => {
                    this.onSuccess(user, resolve);
                },
                onfailure: (reason) => {
                    this.onFailure(reason, reject);
                },
            });
        });
    }

    /**
     * Display the Google One Tap Sign in prompt
     */
    initYolo() {
        const hintPromise = window.googleyolo.hint({
            supportedAuthMethods: [
                "https://accounts.google.com"
            ],
            supportedIdTokenProviders: [
                {
                    uri: "https://accounts.google.com",
                    clientId: "271043031369-oagnkm1jgea0qgn8mk33fcdf1407pu4n.apps.googleusercontent.com"
                }
            ]
        });
        hintPromise.then((credential) => {
            if (credential.idToken) {
                console.log(credential.idToken)
                // Send the token to your auth backend and create the user
                
            }
        }, (error) => {
            console.log(error);
            switch (error.type) {
                case "userCanceled":
                    // The user closed the hint selector. Depending on the desired UX,
                    // request manual sign up or do nothing.
                    break;
                case "noCredentialsAvailable":
                    // No hint available for the session. Depending on the desired UX,
                    // request manual sign up or do nothing.
                    break;
                case "requestFailed":
                    // The request failed, most likely because of a timeout.
                    // You can retry another time if necessary.
                    break;
                case "operationCanceled":
                    // The operation was programmatically canceled, do nothing.
                    break;
                case "illegalConcurrentRequest":
                    // Another operation is pending, this one was aborted.
                    break;
                case "initializationError":
                    // Failed to initialize. Refer to error.message for debugging.
                    break;
                case "configurationError":
                    // Configuration error. Refer to error.message for debugging.
                    break;
                default:
                // Unknown error, do nothing.
            }
        });
    }

    onSuccess = (googleUser) => {
        const id_token = googleUser.getAuthResponse().id_token;
        console.log('in, now authenticate');
       // authenticate(id_token);

        this.props.signInYolo(id_token);

        //resolve();        
    };

    onFailure = (reason, reject) => {
        console.log(reason);
        reject(reason);
    };

    componentWillReceiveProps(nextState) {
        console.log('componentWillReceiveProps');
        if (this.props.user) {
            console.log('redirect');
            if (this.props.match.params.source)
                this.props.history.push('/' + this.props.match.params.source);
            else
                this.props.history.push('/');
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.source);

            window.gapi.signin2.render('my-signin2', {
                scope: 'profile email',
                width: 240,
                height: 50,
                longtitle: true,
                theme: 'dark',
                onsuccess: (user) => {
                    this.onSuccess(user);
                },
                onfailure: (reason) => {
                    
                },
            });

    }

    render() {        

        const { user } = this.props;        

        return (
            <div style={{backgroundColor: '#80d8ff',top:0, left:0, position:'absolute',      
            width: '100%',
            height: '100%'

            }}>                                
                <Grid container justify="center" alignItems="center" alignContent="center" direction="column" spacing={40}>                                                            
                    <Grid item md={12} lg={12} style={{ marginTop: 40 }}>
                        <img src="/stockImages/gooutisideLogin.jpg" alt="logo" />
                    </Grid>
                    <Grid item sm={12} md={12} lg={12} style={{ marginTop: 40 }}>                                        
                        <Typography type="display3" style={{color:"#ffffff", textAlign: 'center'}}>
                            GoOutside
                        </Typography>
                        <Typography type="subheading" style={{color:"#ffffff", textAlign: 'center'}}>
                            ...get the kids off the screen and outside...
                        </Typography>
                    </Grid>
                    <Grid item md={6} lg={6}>
                        <div id="my-signin2"/>                                                        
                    </Grid>                                                                                        
                </Grid>                                
            </div>
        )
    }
}

SignInPage.propTypes = {
    signInYolo: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        user: state.user,        
    };
}

export default connect(mapStateToProps, actions)(withRouter(SignInPage));

