export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_CATEGORY = 'SET_CATEGORY';

export const setSortBy = (value) => ({
    type: SET_SORT_BY,
    payload: value
})

export const setCategory = (value) => ({
    type: SET_CATEGORY,
    payload: value
})