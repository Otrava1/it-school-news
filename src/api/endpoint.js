const API_KEY = '93026763-c3f0-4189-8f4a-49f7bb4189a6';

export function getNewCategoriesEndpoint (category, pageNumber = 1, pageSize=20) {
    const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`

    return `https://content.guardianapis.com/search${queryParams}`
}

export function getNewsDetailsEndpoint (newsId) {
    const queryParams = `?api-key=${API_KEY}&show-fields=all`

    return `https://content.guardianapis.com/${newsId}${queryParams}`
}