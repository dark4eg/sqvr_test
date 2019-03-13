/* eslint import/prefer-default-export: off */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  small: {
    margin: 10,
    width: 20,
    height: 20,
    display: ''
  }
});

const CustomAvatar = ({ user, size, classes }) => {
  const { id, firstName, lastName, avatarUrl } = user;
  const cssClass = size === 'small' ? classes.small : undefined;
  let avatarView;
  if (avatarUrl) {
    avatarView = <Avatar className={cssClass} alt={`${firstName} ${lastName}`} src={avatarUrl} />;
  } else if (firstName && lastName) {
    avatarView = (
      <Avatar className={cssClass} alt={`${firstName} ${lastName}`}>
        {`${firstName[0]} ${lastName[0]}`}
      </Avatar>
    );
  }

  return <a href={`/history/user/${id}/`}>{avatarView}</a>;
};

CustomAvatar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarUrl: PropTypes.string
  }).isRequired,
  classes: PropTypes.shape({}).isRequired,
  size: PropTypes.string
};

CustomAvatar.defaultProps = {
  size: undefined
};

export default withStyles(styles)(CustomAvatar);
