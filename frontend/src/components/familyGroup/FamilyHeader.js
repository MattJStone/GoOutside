import React from 'react';
import PropTypes from 'prop-types';

const FamilyHeader = ({ familyGroup = [] }) => (

  <ul className="list-inline">
    <li className="list-inline-item">
      <div className="family-header">
        <span className="family-header-text">{familyGroup.name}</span>
        <span id="editFamily" className="glyphicon glyphicon-edit" title="Edit this family" />

      </div>
    </li>

  </ul>

);

FamilyHeader.propTypes = {
    familyGroup: PropTypes.object.isRequired,
};


export default FamilyHeader;
