import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography } from "@material-ui/core";
import styles from './styles'
import PropTypes from "prop-types";
import Moment from 'react-moment';
import 'moment/locale/ru';
import ReactImageFallback from "react-image-fallback";
import translate from './translate';


const HistoryItem = ({ classes, user, date, historyType} ) => {
  return (
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>
              <ReactImageFallback 
                src={user.avatarUrl} 
                fallbackImage="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png" 
                className={classes.avatar} 
                alt="avatar" />
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{user.lastName}</Typography>
            <Typography>
                <Moment format="LLL" locale="ru">
                  {date}
                </Moment>
            </Typography>
            <Typography>{translate[historyType]}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

HistoryItem.propTypes = {
    classes: PropTypes.object,
    user: PropTypes.object
}

export default withStyles(styles)(HistoryItem);
