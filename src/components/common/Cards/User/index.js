import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { convertDate } from '../../../../utils/date';

class User extends Component {
  render() {
    const { date, updater, systemText } = this.props.data;

    return (
      <Card className="">
        <CardHeader
          avatar={
            <Avatar
  className=""
  alt={`${updater.firstName} ${updater.lastName}`}
  src={updater.avatarUrl}
/>
          }
          title={`${updater.firstName} ${updater.lastName}`}
          subheader={convertDate(date)}
        />
        <CardContent>
          <p dangerouslySetInnerHTML={{ __html: `${systemText},` }} />
        </CardContent>
      </Card>
    );
  }
}

export default User;
