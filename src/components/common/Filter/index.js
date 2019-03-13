import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Filter extends Component {
  changeFilter = id => () => {
    const { changeFilter } = this.props;
    changeFilter({ id });
  };

  render() {
    const { filters } = this.props;

    return (
      <List component="nav">
        {filters.map(filter => (
          <ListItem
            key={filter.id}
            button
            selected={filter.isActive}
            onClick={this.changeFilter(filter.id)}
          >
            <ListItemText primary={filter.text} />
          </ListItem>
        ))}
      </List>
    );
  }
}

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Filter;
