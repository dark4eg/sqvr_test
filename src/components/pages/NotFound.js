import React from 'react';import Typography from '@material-ui/core/Typography';import { Link } from 'react-router-dom';const PageNotFound = () => {  return (    <div className="content">      <Typography variant="h1">        Page not found. Please start to search from {<Link to="/">main</Link>}      </Typography>    </div>  );};export default PageNotFound;