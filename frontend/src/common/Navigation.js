import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui-next/styles';
import AppBar from 'material-ui-next/AppBar';
import Button from 'material-ui-next/Button';
import Toolbar from 'material-ui-next/Toolbar';
import Typography from 'material-ui-next/Typography';

import FontAwesome from 'react-fontawesome';


import * as actions from '../actions/authActions';

const setActiveButton = (params) => {
  const btn = params.target;

  const kids = [...btn.parentNode.parentNode.childNodes];

  kids.map((e) => {
    const current = e;
    current.className = current.id === btn.parentNode.id ? 'active' : '';
    return current;
  });
};

const styles = {
  root: {
    width: '100%',
  },
  appBar: {
    background: 'black',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Navigation extends Component {
  constructor(props) {
    super(props);


    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    const auth2 = window.gapi.auth2.getAuthInstance();

        if (auth2.isSignedIn.get()) {
          auth2.signOut().then(() => {
            console.log('Google User signed out.');
            this.props.signOut();
          });
  }
}

  render() {
    const { classes } = this.props;

    window.gapi.load('auth2', () => {
      window.gapi.auth2.init();
    });


    return (this.props.user.signedIn ?
      <div className={this.props.classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography type="headline" color="inherit" className={classes.flex}>
                GoOutside
            </Typography>
            {

            this.props.user.signedIn && (
              <Button variant="flat" onClick={this.logOut} >
                <FontAwesome name="cog" color="white" />
              </Button>
            )
          }
          </Toolbar>
        </AppBar>
      </div>
      : <div />
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
  });

export default withStyles(styles)(connect(mapStateToProps, actions)(Navigation));
