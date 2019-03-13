import React from 'react';
import PropTypes from 'prop-types';
import page from 'page';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Btn from './Btn';

const CONST_DEFAULT_USER = 3182;
// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  menu: {
    flexGrow: 1,
    margin: '20px 10px 20px 10px'
  },
  cell: {
    width: '100%',
    textAlign: 'center'
  },
  btn: {
    margin: '0 auto'
  }
});

export const btnList = [
  {
    key: 'registry',
    text: 'Показать историю реестра',
    route: '/history/registry/'
  },
  {
    key: 'user',
    text: 'Показать историю пользователя',
    route: `/history/user/${CONST_DEFAULT_USER}/`
  }
];

const Menu = ({ classes, currentPage, listBtn }) => (
  <div className={classes.menu}>
    <Grid container spacing={24}>
      {listBtn.map(btn => {
        const props = {
          ...btn,
          isActive: currentPage === btn.key,
          onClick: () => page.show(btn.route)
        };

        return (
          <Grid key={btn.key} className={classes.cell} item xs={12} sm={6} md={6} lg={6}>
            <Btn {...props} className={classes.btn} />
          </Grid>
        );
      })}
    </Grid>
  </div>
);

Menu.defaultProps = {
  listBtn: btnList
};

Menu.propTypes = {
  currentPage: PropTypes.string.isRequired,
  listBtn: PropTypes.arrayOf(PropTypes.shape({})),
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Menu);
