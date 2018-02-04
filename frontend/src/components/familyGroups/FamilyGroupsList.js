import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui-next/Grid';

import FamilyGroupsListRow from './FamilyGroupListRow';
import FamilyGroupCard from './FamilyGroupCard';

const FamilyGroupsList = ({ familyGroups = [] }) => (

  <div>

    <Grid container direction="row">
      <Grid item md={4} sm={6}>
        {familyGroups.map(family =>
          <FamilyGroupCard key={family.id} family={family} />)}
      </Grid>
    </Grid>

    <table className="table">
      <thead>
        <tr>
          <th>Family Name</th>
        </tr>
      </thead>
      <tbody>

        {familyGroups.map(family =>
          <FamilyGroupsListRow key={family.id} familyGroup={family} />)}

      </tbody>
    </table>

  </div>
);

FamilyGroupsList.propTypes = {
    familyGroups: PropTypes.array.isRequired,
};


export default FamilyGroupsList;

