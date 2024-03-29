/* eslint import/prefer-default-export: off */

import moment from 'moment';
import 'moment/locale/ru';

export const convertDate = d =>
  moment(d)
    .locale('ru')
    .format('DD MMMM YYYY, h:mm');
