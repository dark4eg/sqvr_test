import React from 'react';import PropTypes from 'prop-types';import {connect} from '@cerebral/react';import page from 'page';import {state} from 'cerebral';import Btn from './Btn';const CONST_DEFAULT_USER = 3182;export const btnList = [    {        key: 'registry',        text: 'Показать историю реестра',        route: '/history/registry/',    },    {        key: 'user',        text: 'Показать историю пользователя',        route: `/history/user/${CONST_DEFAULT_USER}/`,    }];const Menu = ({listBtn, get}) => {    const current = get(state.current);    return (        <div>            {listBtn.map(btn => {                const props = {                    ...btn,                    isActive: current.page === btn.key,                    onClick: () => page.show(btn.route)                };                return <Btn {...props} />;            })}        </div>    );}Menu.defaultProps = {    listBtn: btnList};Menu.props = {    listBtn: PropTypes.arrayOf(PropTypes.shape({})),};export default connect(Menu);