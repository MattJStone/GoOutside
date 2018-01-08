
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FamilyGroupListRow = ({ familyGroup }) => (
  <tr>
    <td><Link to={`/familyGroup/${familyGroup.id}`}>{familyGroup.name}</Link></td>
  </tr>
   );

FamilyGroupListRow.propTypes = {
    familyGroup: PropTypes.object.isRequired,
};

export default FamilyGroupListRow;
