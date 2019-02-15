import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styles from "./styles.js";
import HistoryItem from "../../components/HistoryItem";
import { Button, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "@cerebral/react";
import { state, props, sequences } from "cerebral";


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

export default withStyles(styles)(
  connect(function HistoryList({ get, classes }) {
    const show = get(state.show);
    const limit = get(state.limit);
    const offset = get(state.offset);
    const userId = get(state.userId);
    return (
      <div>
        {show && (
          <Query query={USERS_QUERY} variables={{ userId, limit, offset }}>
            {({ loading, error, data }) => {
              if (loading) return  <Paper className={classes.paper}><p className={classes.center}>Loading...</p></Paper>;
              if (error) return <Paper className={classes.paper}><p className={classes.center}>Error :(</p></Paper>;
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
          </Query>
        )}
        <Paper className={classes.paper}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => get(sequences.showAllHistory)()}
          >
            Показать историю реестра
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() =>
              get(sequences.showUserHistory)({ userId: USER_ID })
            }
          >
            Показать историю пользователя
          </Button>
        </Paper>
      </div>
    );
  })
);
