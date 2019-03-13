// eslint-disable-next-line no-unused-vars
export default s => ({
  current: {
    page: 'root',
    params: {}
  },
  history: {
    isLoadingPage: false,
    isShowFilter: false,
    isLoadingPaging: false,
    error: undefined,
    items: {
      list: [],
      meta: {
        limit: 10,
        offset: 0
      }
    },
    filters: [
      {
        id: 1,
        text: 'Добавлен собственник',
        value: 'AddNewOwner'
      },
      {
        id: 2,
        text: 'Был импорт реестра',
        value: 'Import'
      },
      {
        id: 3,
        text: 'Удален собственник',
        value: 'DeleteOwner'
      }
    ]
  }
});
