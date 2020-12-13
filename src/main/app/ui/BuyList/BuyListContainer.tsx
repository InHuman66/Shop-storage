import React, {useEffect} from 'react';
import BuyList from "./BuyList";
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../bll/redux';
import { ItemsList} from "../../bll/Reducers/ShopList-reducer";


const BuyListContainer= () => {

const dispatch = useDispatch()
const listItemsData = useSelector<AppRootStateType, ItemsList >(state => state.shopListReducer.buyItems)

    return (
        <BuyList listItems={listItemsData}/>
    );
}
export default BuyListContainer;