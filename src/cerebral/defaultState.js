export default (s) => ({
    current: {
        page: 'root',
    },
    history: {
        isLoadingPage: false,
        isShowFilter: false,
        error: undefined,
        items: {
            list: [],
            meta: {
                limit: 10,
                offset: 0,
            },
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
        ],
    },
});
