import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui-next/styles';
import AppBar from 'material-ui-next/AppBar';
import Toolbar from 'material-ui-next/Toolbar';
import Typography from 'material-ui-next/Typography';
import Button from 'material-ui-next/Button';

import FontAwesome from 'react-fontawesome';
import blueGrey from 'material-ui-next/colors/blueGrey';

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
  constructor(props, context) {
    super(props, context);

    this.state = {
      auth: true, // Are they logged in and authenticated
    };
  }


  render() {
    const { classes } = this.props;
    console.log(this.state.auth);
    return (
      <div className={this.props.classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography type="display2" color="inherit" className={classes.flex}>
              GoOutside
            </Typography>
            {

          this.state.auth && (
            <FontAwesome name="cog" />
          )
        }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
