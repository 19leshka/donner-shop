import axios from "axios";

export const SET_DONERS = 'SET_DONERS';
export const SET_LOADED = 'SET_LOADED';

export const setLoaded = payload => ({
    type: SET_LOADED,
    payload: payload
})

export const fetchDoners = (sortBy, category) => (dispatch) => {
    dispatch(setDoners([]))
    dispatch(setLoaded(false));
    axios.get(`https://my-json-server.typicode.com/19leshka/donner-shop-api/doners?${
        category !== null ? `category=${category}&` : ''
    }${
        sortBy === "name" || "price" ? `_sort=${sortBy}&_order=asc` :  `_sort=${sortBy}&_order=desc`
    }`)
    .then(
        ({data}) => dispatch(setDoners(data))
    )

}

export const setDoners = (value) => ({
    type: SET_DONERS,
    payload: value
})