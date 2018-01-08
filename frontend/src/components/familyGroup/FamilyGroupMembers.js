import React from 'react';
import PropTypes from 'prop-types';

import FamilyAdult from './FamilyAdult';
import FamilyChild from './FamilyChild';

const FamilyGroupMembers = ({ parents = [], kids = [], onKidSelected }) => (
  <ul className="list-inline">
    {parents.map(parent => (
      <FamilyAdult key={parent.id} member={parent} />
        ))}
    {kids.map(kid => (
      <FamilyChild key={kid.id} member={kid} onSelected={onKidSelected} />
        ))}

  </ul>

);


FamilyGroupMembers.propTypes = {
    parents: PropTypes.array.isRequired,
    kids: PropTypes.array.isRequired,
    onKidSelected: PropTypes.func.isRequired,
  };


export default FamilyGroupMembers;

