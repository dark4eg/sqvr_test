import React from 'react';
import Typography from '@material-ui/core/Typography';

const PageNotFound = () => {
  return (
    <div className="content">
      <Typography variant="h5">Страница не найдена.</Typography>
      <a href="/">на главную</a>
    </div>
  );
};

export default PageNotFound;
