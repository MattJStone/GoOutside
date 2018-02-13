import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import { connect } from 'react-redux';

import Button from 'material-ui-next/Button';
import TextField from 'material-ui-next/TextField';
import Grid from 'material-ui-next/Grid';
import { withStyles } from 'material-ui-next/styles';
import Typography from 'material-ui-next/Typography/Typography';
import Grey from 'material-ui-next/colors/grey';
import Blue from 'material-ui-next/colors/blue';

import FontAwesome from 'react-fontawesome';

import { GoogleLogin } from 'react-google-login';


const required = value => (value ? undefined : 'This field is required');

const renderField = ({
 input, label, type, fullWidth, multiLine, rows, required, helperText, meta: { touched, error },
}) => (
  <div>
    {console.log(`${label}-${error}`)}

    {touched && error &&

      <TextField
        {...input}
        label={label}
        fullWidth={fullWidth}
        multiline={multiLine}
        required={required}
        error
        helperText={error}
      /> }

    {(!touched || !error) && <TextField
      {...input}
      label={label}
      fullWidth={fullWidth}
      multiline={multiLine}
      required={required}
      helperText={helperText}
    /> }

  </div>
);


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        flexGrow: 1,
        marginTop: 30,
        alignSelf: 'flex-end',
    },
    heading: {
      marginTop: 45,
      marginBottom: 20,
    },
    linkButton: {
      marginTop: 15,
      color: Grey[400],
      textTransform: 'None',
      fontWeight: 300,
    },
    altLoginButton: {
      marginTop: 15,
      textTransform: 'None',
      marginRight: theme.spacing.unit,
    },
    authButton: {
      backgroundColor: Blue[500],
      color: 'white',
      textTransform: 'None',
      width: '100%',
    },
});

const success = (res) => {
  console.log(`success ${res}`);

  this.props.googleSignIn(res);
};

const fail = (res) => {
  console.log(res);
};


const responseGoogle = (response) => {
  console.log(response);
};



const googleYolo = () => {

};

 const SigninForm = (props) => {
    const { handleSubmit, classes } = props;


    return (

//      <form onSubmit={handleSubmit} style={{ width: '650px' }}>
      <div style={{ width: '650px' }}>
        <Grid container justify="center" alignItems="center" spacing={24}>

          <Grid item md={6} lg={6} style={{ marginTop: 40 }}>
            <img src="/stockImages/gooutisideLogin.jpg" alt="logo" />
          </Grid>
          <Grid item md={6} lg={6}>
            <div className={classes.heading}>
              <Typography type="title">Sign in</Typography>
            </div>

            <GoogleLogin
              clientId="271043031369-oagnkm1jgea0qgn8mk33fcdf1407pu4n.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={props.googleSignIn}
              onFailure={responseGoogle}
              style={{
                backgroundColor: Blue[500],
                color: 'white',
                textTransform: 'None',
                width: '100%',
                fontWeight: 'normal',
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 2,
                border: '1px solid transparent',
                fontSize: 14,
                fontFamily: 'Roboto',
              }}
            >
              <FontAwesome
                name="google"
              />
              <span> Sign in with Google</span>
            </GoogleLogin>

          </Grid>
        </Grid>

      </div>
      // </form>
    );
  };

renderField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
};

SigninForm.propTypes = {
    ...propTypes,
};

export default withStyles(styles)(reduxForm({ form: 'signinForm' })(SigninForm));
