import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock } from '../components';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

function Home({ items }) {
    const dispatch = useDispatch();
	const [categories, setCategories] = React.useState([]);
    const { category } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
        .then((json) => {
            setCategories(json.data.map(category => category.name));
        });
    }, []);

    React.useEffect(() => {
        console.log("fetch");
        dispatch(fetchPizzas(category));
      }, [category]);

    const onSelectCategory = React.useCallback((index) => {
        console.log("category");
        dispatch(setCategory(index));
    }, []);

	return (
        <React.Fragment>
            <div className="content__top mx-4 mb-4 d-flex justify-content-between align-items-center">
                <div className="pizza__title">All pizzas</div>
				<Categories activeCategory={category} onClickCategory={onSelectCategory} items={categories} />
            </div>
			<div className="row pizza no-gutters">
				{
					items.map(obj => <PizzaBlock key={obj._id} {...obj} /> )
				}
			</div>
        </React.Fragment>
    );
}

export default Home
