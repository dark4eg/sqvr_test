import React from 'react';
import Typography from '@material-ui/core/Typography';

const PageNotFound = () => {
  return (
    <div className="content">
      <Typography variant="h6">
        Page not found. Please start to search from {<a href="/">main</a>}
      </Typography>
    </div>
  );
};

export default PageNotFound;
