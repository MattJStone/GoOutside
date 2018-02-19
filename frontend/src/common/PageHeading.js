import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui-next/Typography';

const PageHeading = ({ title, subHeading }) => (
  <div>
    <Typography type="headline" align="center" gutterBottom style={{ marginTop: 30 }}>
      {title}
    </Typography>
    <Typography type="subheading" align="center" gutterBottom style={{ marginBottom: 30 }}>
      {subHeading}
    </Typography>
  </div>
    );

PageHeading.propTypes = {
    title: PropTypes.string.isRequired,
    subHeading: PropTypes.string,

};

PageHeading.defaultProps = {
  subHeading: undefined,
};

export default PageHeading;
