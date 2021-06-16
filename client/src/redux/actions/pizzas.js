import axios from 'axios';

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});

export const fetchPizzas = (category) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED',
		payload: false,
	});

	axios
	.get(
		`http://localhost:5000/api/pizza?${category !== null ? `category=${category}` : ''}`,
	)
	.then(({ data }) => {
		dispatch(setPizzas(data));
	});
};

export const setPizzas = (items) => ({
	type: 'SET_PIZZAS',
	payload: items,
});