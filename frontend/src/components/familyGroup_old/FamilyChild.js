import React from 'react';
import PropTypes from 'prop-types';

const FamilyChild = ({ member = [], onSelected }) => (

  <li className="list-inline-item" key={member.id}>
    <button
      className="btn btn-default"
      onClick={() => onSelected(member.id)}
      onKeyPress={() => onSelected(member.id)}
    >
      <img
        src={member.image}
        className="img-circle img-circle-kid"
        alt={member.displayName}
      />
    </button>
  </li>

);

FamilyChild.propTypes = {
    member: PropTypes.object.isRequired,
    onSelected: PropTypes.func.isRequired,
};


export default FamilyChild;
