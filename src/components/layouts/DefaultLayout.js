import React, { Fragment } from 'react';import PropTypes from 'prop-types';import { bindActionCreators } from 'redux';import { connect } from 'react-redux';import Menu from '../common/Menu';const DefaultLayout = ({ routeInfo, children }) => {  return (    <Fragment>      <div className="header">        <Menu routeInfo={routeInfo} />      </div>      <div className="page">{children}</div>    </Fragment>  );};DefaultLayout.propTypes = {  children: PropTypes.element.isRequired};const mapStateToProps = store => ({  routeInfo: store.routeInfo});const mapDispatchToProps = dispatch => ({});export default connect(  mapStateToProps,  mapDispatchToProps)(DefaultLayout);