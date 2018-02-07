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
    },
});

const googleAuth = () => {
  const user = {
    id: '00-010',
    login: 'matt.stone77@gmail.com',
    oauth: 'google',
  };

  this.props.handleSubmit(user);
};

 const SigninForm = (props) => {
    const { handleSubmit, classes } = props;

    return (

      <form onSubmit={handleSubmit} style={{ width: '650px' }}>

        <Grid container justify="center" alignItems="center" spacing={24}>

          <Grid item md={6} lg={6}>
            <img src="/stockImages/gooutisideLogin.jpg" alt="logo" />
          </Grid>
          <Grid item md={6} lg={6}>
            <div className={classes.heading}>
              <Typography type="title">Sign in</Typography>
            </div>
            <Button fullWidth raised className={classes.authButton} onClick={googleAuth} >
              <FontAwesome name="google" />
              Sign in with Google
            </Button>
            <Typography type="caption" align="center" style={{ marginBottom: 5, marginTop: 15 }}>-- or --</Typography>

            <Field name="username" type="text" component={renderField} label="Email address" fullWidth required />
            <Field name="password" type="password" component={renderField} label="Password" fullWidth required />
            <Button raised fullWidth color="primary" id="Signin" type="submit" style={{ marginTop: '15px', marginBottom: '12px', textTransform: 'none' }}>
            Sign in
            </Button>
            <Button fullWidth className={classes.linkButton} href="#">Hmm... I seem to have forgotten my password</Button>

          </Grid>
        </Grid>


      </form>
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
