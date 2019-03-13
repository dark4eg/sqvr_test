import React from 'react';
import PropTypes from 'prop-types';
import page from 'page';
import Btn from './Btn';

const CONST_DEFAULT_USER = 3182;

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

const Menu = ({ currentPage, listBtn }) => (
  <div>
    {listBtn.map(btn => {
      const props = {
        ...btn,
        isActive: currentPage === btn.key,
        onClick: () => page.show(btn.route)
      };

      return <Btn {...props} />;
    })}
  </div>
);

Menu.defaultProps = {
  listBtn: btnList
};

Menu.propTypes = {
  currentPage: PropTypes.string.isRequired,
  listBtn: PropTypes.arrayOf(PropTypes.shape({}))
};

export default Menu;
