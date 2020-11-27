import React from 'react';
import BuyList from "./BuyList";
import {useSelector} from "react-redux";
import { AppRootStateType } from '../../bll/redux';
import {ItemsList} from "../../bll/Reducers/app-reducer";


const BuyListContainer= () => {

const listItemsData = useSelector<AppRootStateType, ItemsList >(state => state.appReducer.buyItems)
    return (
        <BuyList listItems={listItemsData}/>
    );
}
export default BuyListContainer;