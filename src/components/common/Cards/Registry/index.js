/* eslint react/no-danger: off */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '../../Avatar';

import { convertDate } from '../../../../utils/date';
import styles from '../styles';

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
    const { data, classes } = this.props;
    const { date, user, updater, systemText } = data;
    const { additionalIsActive } = this.state;
    const expandBtnView = additionalIsActive ? <ExpandLess /> : <ExpandMore />;

    return (
      <Card className={classes.borderBottom}>
        <CardHeader
          className={classes.headerCard}
          avatar={<Avatar user={updater} />}
          title={`${updater.firstName} ${updater.lastName}`}
          subheader={convertDate(date)}
          action={<IconButton onClick={this.toggleAdditional}>{expandBtnView}</IconButton>}
        />
        <CardContent className={classes.contentCard}>
          <p dangerouslySetInnerHTML={{ __html: `${systemText}` }} />
          <div className={classes.flex}>
            <div className={classes.flexCellCenter}>собственник </div>
            {user && <Avatar className={classes.flexCellCenter} user={user} size="small" />}
            {user && (
              <div className={classes.flexCellCenter}>{`${user.firstName} ${user.lastName}`}</div>
            )}
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
    user: PropTypes.shape({}),
    updater: PropTypes.shape({}).isRequired,
    systemText: PropTypes.string
  }).isRequired,
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Registry);
