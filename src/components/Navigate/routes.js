import NotFound from '../pages/NotFound';
import Root from '../pages/Root';
import History from '../pages/History';
import RegistryChildren from '../common/Cards/Registry';
import UserChildren from '../common/Cards/User';

const routes = {
  root: {
    path: '/',
    exact: true,
    component: Root,
    name: 'page-root',
    title: 'Index page'
  },
  registry: {
    path: '/history/registry/',
    exact: true,
    component: History,
    componentChildren: RegistryChildren,
    name: 'page-registry',
    title: 'История изменений реестра'
  },
  user: {
    path: '/history/user/:userId',
    exact: true,
    component: History,
    componentChildren: UserChildren,
    name: 'page-user',
    title: 'История изменений пользователя'
  },
  notfound: {
    component: NotFound,
    name: 'page-not-found'
  }
};

export default routes;
