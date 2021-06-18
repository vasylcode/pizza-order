import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock, PizzaLoadingBlock } from '../components';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const [categories, setCategories] = React.useState([]);
    const { category } = useSelector(({ filters }) => filters);
    

    React.useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
        .then((json) => {
            setCategories(json.data.map(category => category.name));
        });
    }, []);

    React.useEffect(() => {
        dispatch(fetchPizzas(category));
      }, [category]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    };

	return (
        <React.Fragment>
            <div className="content__top mx-4 mb-4 d-flex justify-content-between align-items-center">
                <div className="pizza__title">All pizzas</div>
				<Categories activeCategory={category} onClickCategory={onSelectCategory} items={categories} />
            </div>
			<div className="row pizza no-gutters">
				{isLoaded
					? items.map(obj => <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={obj.id} {...obj} /> )
                : Array(items.length)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />)}
			</div>
        </React.Fragment>
    );
}

export default Home
