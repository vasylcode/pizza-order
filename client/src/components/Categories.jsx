import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
    // const [activeItem, setActiveItem] = useState(null);
    return (
        <React.Fragment>
            <div className={activeCategory === null ? 'content__top-item active' : 'content__top-item'} onClick={() => onClickCategory(null)}>All</div>
            {items && items.map((name, index) =>(
                <div onClick={() => onClickCategory(index)} className={activeCategory  === index ? 'content__top-item active' : 'content__top-item'} key={`${name}_${index}`}>{name}</div>
            ))}
        </React.Fragment>
    );
});

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;