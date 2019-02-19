import React, { Fragment, Component } from 'react';import PropTypes from 'prop-types';import { bindActionCreators } from 'redux';import { connect } from 'react-redux';import { Switch, Route } from 'react-router-dom';import routes from './routes';import DefaultLayout from '../layouts/DefaultLayout';import setRouteInfoActionCreator from '../../store/actions/setRouteInfo';class Navigate extends Component {  componentWillReceiveProps(newProps) {    const currentPathName = window.location.pathname;    const newPathName = newProps.routeInfo.path;    if (newPathName !== currentPathName) {      this.props.setRouteInfo({        path: newPathName      });    }  }  render() {    return (      <Fragment>        <DefaultLayout>          <Switch>            {routes.map(route => (              <Route key={route.name} {...route} />            ))}          </Switch>        </DefaultLayout>      </Fragment>    );  }}const mapStateToProps = store => ({  routeInfo: store.routeInfo});const mapDispatchToProps = dispatch => ({  setRouteInfo: bindActionCreators(setRouteInfoActionCreator, dispatch)});Navigate.propTypes = {  routeInfo: PropTypes.shape({}),  routes: PropTypes.arrayOf(    PropTypes.shape({      path: PropTypes.string,      exact: PropTypes.bool,      component: PropTypes.node.isRequired,      name: PropTypes.string.isRequired,      layout: PropTypes.node.isRequired    })  )};Navigate.defaultProps = {  routes: routes};export default connect(  mapStateToProps,  mapDispatchToProps)(Navigate);