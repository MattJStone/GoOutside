import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './common/Navigation';
import FamilyGroups from './components/familyGroups/FamilyGroupsPage';
import FamilyGroup from './components/familyGroup/FamilyGroupPage';

class App extends Component {
  render() {
      return (
        <div>
          <BrowserRouter>
            <div>
              <header className="App-header">
                <Navigation />
              </header>
              <section className="main-content-wrapper">
                <Route exact path="/" component={FamilyGroups} />
                <Route path="/familyGroup/:familyGroupId" component={FamilyGroup} />
              </section>
            </div>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;

