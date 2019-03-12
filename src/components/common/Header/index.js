import React from 'react';import CardHeader from '@material-ui/core/CardHeader';import IconButton from '@material-ui/core/IconButton';import Close from '@material-ui/icons/Close';import FilterList from '@material-ui/icons/FilterList';const Header = ({ title, toggleFilter, toIndex }) => (  <CardHeader    title={title}    action={        [(            <IconButton key="filter" onClick={toggleFilter}>                <FilterList />            </IconButton>        ),        (            <IconButton key="to-root" onClick={toIndex}>                <Close />            </IconButton>        )]    }  />);export default Header;