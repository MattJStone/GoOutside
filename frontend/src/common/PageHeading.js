import React from 'react';
import PropTypes from 'prop-types';


const headingStyle = {
    width: '100%',
    verticalAlign: 'middle',
    textAlign: 'center',
    height: 50,
    marginTop: 30,
    marginBottom: 10,
};

const subHeadingStyle = {
    width: '100%',
    verticalAlign: 'middle',
    textAlign: 'center',
    marginBottom: 30,
};

const PageHeading = ({ title, subHeading }) => (
  <div>
    <h3 style={headingStyle}>
      {title}
    </h3>
    <p style={subHeadingStyle}>
      {subHeading}
    </p>
  </div>
    );

PageHeading.propTypes = {
    title: PropTypes.string,
    subHeading: PropTypes.string,

};

PageHeading.defaultProps = {
  title: 'Title',
  subHeading: undefined,
};

export default PageHeading;
