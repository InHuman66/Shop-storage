import React, {useEffect} from 'react';
import ShopList from "./ShopList";
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../bll/redux';
import {filterValueType, ItemsList, sortFilterItemTC, sortValueType} from "../../bll/Reducers/ShopList-reducer";


const ShopListContainer= () => {

    const dispatch = useDispatch()
    const listItemsData = useSelector<AppRootStateType, ItemsList >(state => state.shopListReducer.sortFilterItems)
    let filterSort=(filter:filterValueType, sort:sortValueType) => dispatch(sortFilterItemTC(filter, sort))

    return (
        <ShopList filterSort={filterSort} listItems={listItemsData}/>
    );
}
export default ShopListContainer;