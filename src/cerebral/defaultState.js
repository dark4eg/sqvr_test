const LIMIT = 6;
const OFFSET = 0;

export default (store) => ({
  ...store,
    show: false,
    userId: false,
    limit: LIMIT,
    offset: OFFSET,
    foo: 'test'
});