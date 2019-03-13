import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Filter extends Component {
  changeFilter = id => () => {
    this.props.changeFilter({ id });
  };

  render() {
    const { filters } = this.props;

    return (
      <List component="nav">
        {filters.map(filter => {
          console.log('filter', filter);
          return (
            <ListItem button selected={filter.isActive} onClick={this.changeFilter(filter.id)}>
              <ListItemText primary={filter.text} />
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default Filter;
