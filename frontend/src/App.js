import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Reboot from 'material-ui-next/Reboot';

import Loadable from 'react-loading-overlay';
import Theme from '../src/styles/theme';
import Navigation from './common/Navigation';
import FamilyGroups from './components/familyGroups/FamilyGroupsPage';
import FamilyGroup from './components/familyGroup/FamilyGroupPage';
import Signin from './components/auth/SignInPage';

import TextField from 'material-ui-next/TextField';


class App extends Component {
  render() {
      return (
        <div>
        <Theme>
          <BrowserRouter>

            <Loadable active={this.props.spinner.display} spinner text={this.props.spinner.spinnerText} >
              <header className="App-header">
                <Navigation />
              </header>
              <section className="main-content-wrapper">
                <Route exact path="/" component={FamilyGroups} />
                <Route path="/familyGroup/:familyGroupId" component={FamilyGroup} />
                <Route path="/signin" component={Signin} />
              </section>              
            </Loadable>

          </BrowserRouter>
          </Theme>
        </div>

      );
  }
}

App.propTypes = {
  spinner: PropTypes.bool,
};

App.defaultProps = {
  spinner: true,
};

function mapStateToProps(state) {
  return {
      spinner: false,
  };
}

export default connect(mapStateToProps)(App);

