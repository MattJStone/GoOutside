import React from 'react';
import PropTypes from 'prop-types';
import FamilyGroupsListRow from './FamilyGroupListRow';

const FamilyGroupsList = ({ familyGroups = [] }) => (

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
);

FamilyGroupsList.propTypes = {
    familyGroups: PropTypes.array.isRequired,
};


export default FamilyGroupsList;

