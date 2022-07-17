import {Categories, SortPopup, ItemBlock, ItemBlockLoader} from './../components';
import {useSelector, useDispatch} from 'react-redux';
import {setCategory, setSortBy} from './../redux/actions/filters';
import {useCallback} from 'react';
import React from "react";
import {fetchDoners} from "../redux/actions/doners";
import {addDoner, setItemCount} from '../redux/actions/cart'

const categories = ['Мясные','Вегетарианская','Острые','Закрытые'];
const popUp = [
        {name: 'популярности', type: 'popular'},
        {name: 'цене', type: 'price'},
        {name: 'названию', type: 'name'}
    ]

const Home = () => {
    const dispatch = useDispatch();

    const items = useSelector(({doners}) => doners.items);
    const isLoaded = useSelector(({doners}) => doners.isLoaded);
    const { category, sortBy } = useSelector(({filters}) => filters);
    const itemsCount = useSelector(({cart}) => cart.itemsCount);


    React.useEffect(() => {
        dispatch(fetchDoners(sortBy, category))
    }, [category, sortBy])

    const addToCartHandler = (item, count) => {
        dispatch(addDoner(item))
        dispatch(setItemCount(count))
    }

    const productItems = items && items.map(item => {
        let itemCount = 0;
        if(itemsCount.hasOwnProperty(item.id)) {
            itemCount = itemsCount[item.id]
        }
        return <ItemBlock key={item.id} itemCount={itemCount} onAddToCart={addToCartHandler} {...item}/>
    });

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index));
    }, []);
    const onSelectSortBy = useCallback(index => {
        dispatch(setSortBy(popUp[index].type));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    items={categories}
                    onClickItem={onSelectCategory}
                />
                <SortPopup
                    activeSortBy={sortBy}
                    items={popUp}
                    onClickItem={onSelectSortBy}
                />
            </div>
            <h2 className="content__title">Все доннеры</h2>
            <div className="content__items">
                {productItems}
                {isLoaded || new Array(10)
                    .fill(0)
                    .map((_, index) => <ItemBlockLoader key={index}/>)
                }
            </div>
        </div>
    )
}

export default Home;