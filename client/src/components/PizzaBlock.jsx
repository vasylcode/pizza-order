import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function PizzaBlock({ id, name, image, price, types, sizes, onClickAddPizza }) {
    const availableTypes = ['Traditional', 'Thin'];
    const availableSizes = [26, 30, 40];

    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    };

    const onSelectSize = (index) => {
      setActiveSize(index);
    };

    const onAddPizza = () => {
        const obj = {
            id,
            name,
            image,
            price,
            size: availableSizes[activeSize],
            type: availableTypes[activeType],
        };
        onClickAddPizza(obj);
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="pizza__card">
                <img src={image} alt="Mexican" className="pizza__card-image" />
                <h4 className="pizza__card-title">{name}</h4>
                <div className="pizza__card-selector">
                    <ul className="pizza__gough">
                        {availableTypes.map((type, index) => (
                            <li key={type} onClick={() => onSelectType(index)}className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index),
                              })}>{type}</li>
                        ))}
                    </ul>
                    <ul className="pizza__size">
                        {availableSizes.map((size, index) => (
                            <li
                            key={size}
                            onClick={() => onSelectSize(index)}
                            className={classNames({
                                active: activeSize === index,
                                disabled: !sizes.includes(size),
                            })}>
                            {size} cm
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza__card-bottom">
                    <div className="pizza__card-price">${price}</div>
                    <div className="pizza__card-buy" onClick={onAddPizza}>
                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path></svg>
                        Add
                    </div>
                </div>
            </div>
        </div>
    );
}

PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onClickAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
};

export default PizzaBlock;
