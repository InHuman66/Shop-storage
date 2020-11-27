import React from 'react';
import classes from "./ShopItem.module.css";
import ShopItem from "./ShopItem";
import {useDispatch} from "react-redux";
import {addInBuyListTC, deleteTC, ItemType} from '../../bll/Reducers/app-reducer';




type PropsTypeItem ={
    name: string
    id: number
    status: string
    priority: number

}
const ShopItemContainer: React.FC<PropsTypeItem>= (props) => {
    const dispatch = useDispatch()

    let deleteOnclick =(id: number)=>{
        dispatch(deleteTC(id))
    }
    let addInBuyListOnclick =(id: number)=>{
        dispatch(addInBuyListTC(id))
    }
    return (
        <ShopItem addInBuyListOnclick={addInBuyListOnclick} deleteOnClick={deleteOnclick} priority={props.priority} status={props.status} name={props.name} id={props.id} key={props.id}/>
    );
}


export default ShopItemContainer;