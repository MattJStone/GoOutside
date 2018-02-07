import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui-next/Grid';

import FamilyGroupCard from './FamilyGroupCard';

const FamilyGroupsList = ({ familyGroups = [] }) => (

  <Grid container justify="center" alignItems="center">
    {familyGroups.map(family =>
      <FamilyGroupCard key={family.id} theFamily={family} />)}
  </Grid>
);

FamilyGroupsList.propTypes = {
    familyGroups: PropTypes.array.isRequired,
};


export default FamilyGroupsList;

