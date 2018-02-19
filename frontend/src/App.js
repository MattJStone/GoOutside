import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loading-overlay';
import Theme from '../src/styles/theme';
import Navigation from './common/Navigation';
import FamilyGroups from './components/familyGroups/FamilyGroupsPage';

import Signin from './components/auth/SignInPageYolo';
import NewFamilyGroupPage from './components/familyGroup/add/NewFamilyGroupPage';


class App extends Component {
  render() {
      return (
        <div>
          <Theme>
            <BrowserRouter>

              <div>
                <header className="App-header">
                  <Navigation />
                </header>
                <div >
                  <Route exact path="/" component={FamilyGroups} />

                  <Route path="/signin/:source?" component={Signin} />
                  <Route path="/addFamily" component={NewFamilyGroupPage} />
                </div>

              </div>
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

