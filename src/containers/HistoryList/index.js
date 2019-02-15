import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styles from "./styles.js";
import HistoryItem from "../../components/HistoryItem";
import { Button, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { state, sequences } from '../../controller'
import { connect } from '@cerebral/react'


const USERS_QUERY = gql`
  query USERS_QUERY($userId: Int, $limit: Int, $offset: Int) {
    users {
      history(userId: $userId, limit: $limit, offset: $offset) {
        id
        body
        date
        historyType
        updater {
          id
        }
        documents {
          id
        }
        user {
          id
          firstName
          lastName
          middleName
          avatarUrl
          avatarColor
        }
      }
    }
  }
`;

const USER_ID = 3182;
const LIMIT = 6;
const OFFSET = 0;

class History extends Component {
  state = {
    show: false,
    userId: false,
    limit: LIMIT,
    offset: OFFSET
  }
  onClickHandler = (userId) => {
    let state = {}
    if(userId) {
      state = { userId }
    } else {
      state = { userId: false}
    }
    state.show = true;
    this.setState(state)
  }
  render() {
    const { classes } = this.props;
    const { limit, offset, userId } = this.state;
    return (
      <div>
        {this.state.show && <Query query={USERS_QUERY} variables={{ userId, limit, offset }}>
          {({ loading, error, data }) => {
            if (loading) return <p className={classes.center}>Loading...</p>;
            if (error) return <p className={classes.center}>Error :(</p>;
            return (
              <div>
                {data.users.history.map(({ user, id, date, historyType }) => (
                  <HistoryItem
                    key={id}
                    user={user}
                    date={date}
                    historyType={historyType}
                  />
                ))}
              </div>
            );
          }}
        </Query>}
        <Paper className={classes.paper}>
          <Button variant="contained" className={classes.button} onClick={() => this.onClickHandler()}>
            Показать историю реестра
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.onClickHandler(USER_ID)}
          >
            Показать историю пользователя
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(History);
