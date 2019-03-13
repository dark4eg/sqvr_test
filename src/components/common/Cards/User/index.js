/* eslint react/no-danger: off */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { convertDate } from '../../../../utils/date';

const User = ({ data }) => {
  const { date, updater, systemText } = data;

  const avatarView = (
    <Avatar className="" alt={`${updater.firstName} ${updater.lastName}`} src={updater.avatarUrl} />
  );

  return (
    <Card className="">
      <CardHeader
        avatar={avatarView}
        title={`${updater.firstName} ${updater.lastName}`}
        subheader={convertDate(date)}
      />
      <CardContent>
        <p dangerouslySetInnerHTML={{ __html: `${systemText},` }} />
      </CardContent>
    </Card>
  );
};

User.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    // user: PropTypes.shape({}).isRequired,
    updater: PropTypes.shape({}).isRequired,
    systemText: PropTypes.string.isRequired
  }).isRequired
};

export default User;
