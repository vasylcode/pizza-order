import React, { useState } from 'react'

function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);
    return (
        <React.Fragment>
            <div className={activeItem === null ? 'content__top-item active' : 'content__top-item'} onClick={() => setActiveItem(null)}>All</div>
            {items && items.map((name, index) =>(
                <div onClick={() => setActiveItem(index)} className={activeItem === index ? 'content__top-item active' : 'content__top-item'} key={`${name}_${index}`}>{name}</div>
            ))}
        </React.Fragment>
    )
}

export default Categories
