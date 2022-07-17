import React from "react";
import PropTypes from 'prop-types';

const Categories = React.memo(({activeCategory, items, onClickItem}) => {
    const handleSelectActiveItem = (index) =>  {
        onClickItem(index);
    }
    return (
        <div className="categories">
            <ul>
                <li onClick={() => handleSelectActiveItem(null)} className={null == activeCategory ? 'active' : ''}>Все</li>
                {items && items.map((name, index) => <li className={index === activeCategory ? 'active' : ''} key={`${name}_${index}`} onClick={() => handleSelectActiveItem(index)}>
                    {name}
                </li>)}
            </ul>
        </div>
    ) 
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
