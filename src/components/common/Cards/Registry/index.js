/* eslint react/no-danger: off */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Avatar from '@material-ui/core/Avatar';
import { convertDate } from '../../../../utils/date';

class Registry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      additionalIsActive: false
    };
  }

  toggleAdditional = () => {
    const { additionalIsActive } = this.state;
    this.setState({ additionalIsActive: !additionalIsActive });
  };

  render() {
    const { data } = this.props;
    const { date, user, updater, systemText } = data;
    const { additionalIsActive } = this.state;
    const expandBtnView = additionalIsActive ? <ExpandLess /> : <ExpandMore />;

    let avatarUserView;
    let avatarUpdaterView;
    if (user.avatarUrl) {
      avatarUserView = (
        <a href={`/history/user/${user.id}/`}>
          <Avatar
            sizes="20,20"
            className=""
            alt={`${user.firstName} ${user.lastName}`}
            src={user.avatarUrl}
          />
        </a>
      );
    } else if (user.firstName && user.lastName) {
      avatarUserView = (
        <a href={`/history/user/${user.id}/`}>
          <Avatar className="" alt={`${user.firstName} ${user.lastName}`}>
            {`${user.firstName[0]} ${user.lastName[0]}`}
          </Avatar>
        </a>
      );
    }
    if (updater.avatarUrl) {
      avatarUpdaterView = (
        <a href={`/history/user/${updater.id}/`}>
          <Avatar
            sizes="20,20"
            className=""
            alt={`${updater.firstName} ${updater.lastName}`}
            src={updater.avatarUrl}
          />
        </a>
      );
    } else if (updater.firstName && updater.lastName) {
      avatarUpdaterView = (
        <a href={`/history/user/${updater.id}/`}>
          <Avatar className="" alt={`${updater.firstName} ${updater.lastName}`}>
            {`${updater.firstName[0]} ${updater.lastName[0]}`}
          </Avatar>
        </a>
      );
    }

    return (
      <Card className="">
        <CardHeader
          avatar={avatarUpdaterView}
          title={`${updater.firstName} ${updater.lastName}`}
          subheader={convertDate(date)}
          action={<IconButton onClick={this.toggleAdditional}>{expandBtnView}</IconButton>}
        />
        <CardContent>
          <p dangerouslySetInnerHTML={{ __html: `${systemText},` }} />
          <div>
            <span>собственник </span>
            {avatarUserView}
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </div>
          {additionalIsActive && (
            <Fragment>
              <p>Комментарий:</p>
              <p>нет данных</p>
            </Fragment>
          )}
        </CardContent>
      </Card>
    );
  }
}

Registry.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({}).isRequired,
    updater: PropTypes.shape({}).isRequired,
    systemText: PropTypes.string.isRequired
  }).isRequired
};

export default Registry;
