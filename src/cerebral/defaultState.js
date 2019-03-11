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
        filters: [],
    },
});
