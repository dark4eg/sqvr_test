export default (s) => ({
    current: {
        route: {
            params: {
                userId: null,
            }
        },
        page: 'root',
    },
    history: {
        registry: {
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
        user: {
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
    },
});
