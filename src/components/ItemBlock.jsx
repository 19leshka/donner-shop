import {useState} from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";


const ItemBlock = ({id, imageUrl, name, types, sizes, price, category, rating, onAddToCart, itemCount}) =>  {
    const [activePita, setActivePita] = useState(0);
    const [activeItemsSize, setActiveItemsSize] = useState(0);
    const [count, setCount] = useState(itemCount)

    const pitas = ['классический','сырный'].splice(0, types.length);

    const addItemHandler = () => {
        setCount(prev => prev + 1);
        const choosedDoner = {
            id,
            name,
            imageUrl,
            type: pitas[activePita],
            size: sizes[activeItemsSize],
            price: price[activeItemsSize],
            key: `${id}_${activePita}_${activeItemsSize}`
        }
        const itemCount = {
            id: id,
            count: count + 1
        }
        onAddToCart(choosedDoner, itemCount)
    }

    return (
        <div className="donner-block">
                <img
                    className="donner-block__image"
                    src={imageUrl}
                    alt="Doner"
                />
                <h4 className="donner-block__title">{name}</h4>
                <div className="donner-block__selector">
                    <ul>
                        {pitas && pitas.map((item, index) => <li className={index == activePita ? 'active' : ''} key={`${name}_${index}`} onClick={() => setActivePita(index)}>{item}</li>)}
                        {}
                    </ul>
                    <ul>
                        {sizes && sizes.map((item, index) => <li className={index == activeItemsSize ? 'active' : ''} key={`${name}_${index}`} onClick={() => setActiveItemsSize(index)}>{item} г.</li>)}
                    </ul>
                </div>
                <div className="donner-block__bottom">
                    <div className="donner-block__price">{price[activeItemsSize]} $</div>
                    <Button onClick={() => addItemHandler()} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{count}</i>
                    </Button>
                </div>
                </div>
      )
}

ItemBlock.propTypes = {
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired,
    category: PropTypes.number,
    rating: PropTypes.number,
    onAddToCart: PropTypes.func
}

ItemBlock.defaultProps = {
    name: 'Doner',
    types: []
}

export default ItemBlock