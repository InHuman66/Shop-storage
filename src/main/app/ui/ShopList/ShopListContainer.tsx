import React from 'react';
import ShopList from "./ShopList";
import {useSelector} from "react-redux";
import { AppRootStateType } from '../../bll/redux';
import {ItemsList} from "../../bll/Reducers/app-reducer";


const ShopListContainer= () => {

const listItemsData = useSelector<AppRootStateType, ItemsList >(state => state.appReducer.storageItems)
    return (
        <ShopList listItems={listItemsData}/>
    );
}
export default ShopListContainer;