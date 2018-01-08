import React from 'react';
import PropTypes from 'prop-types';

const FamilyAdult = ({ member = [] }) => (

  <li className="list-inline-item" key={member.id}>
    <img src={member.image} className="img-circle img-circle-parent" alt={member.displayName} />
  </li>

);

FamilyAdult.propTypes = {
    member: PropTypes.object.isRequired,
};


export default FamilyAdult;
