/* eslint import/prefer-default-export: off */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

const CustomAvatar = ({ user: { id, firstName, lastName, avatarUrl } }) => {
  const avatarView = avatarUrl ? (
    <Avatar sizes="20,20" className="" alt={`${firstName} ${lastName}`} src={avatarUrl} />
  ) : (
    <Avatar className="" alt={`${firstName} ${lastName}`}>
      {`${firstName[0]} ${lastName[0]}`}
    </Avatar>
  );
  return <a href={`/history/user/${id}/`}>{avatarView}</a>;
};

CustomAvatar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
  }).isRequired
};

export default CustomAvatar;
