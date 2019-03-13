/* eslint import/prefer-default-export: off */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

const CustomAvatar = ({ user }) => {
  if (!user) {
    return undefined;
  }

  const { id, firstName, lastName, avatarUrl } = user;
  let avatarView;
  if (avatarUrl) {
    avatarView = (
      <Avatar sizes="20,20" className="" alt={`${firstName} ${lastName}`} src={avatarUrl} />
    );
  } else if (firstName && lastName) {
    avatarView = (
      <Avatar className="" alt={`${firstName} ${lastName}`}>
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
  }).isRequired
};

export default CustomAvatar;
