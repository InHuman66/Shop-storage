import React, {useEffect} from 'react';
import BuyItem from "./BuyItem";
import {useDispatch} from "react-redux";
import { deleteFromBuyListTC } from '../../../bll/Reducers/ShopList-reducer';

type PropsTypeItem ={
    name:string
    value:number
    status: string
    priority: string
    price: number
    id:number
}

const BuyItemContainer: React.FC<PropsTypeItem>= (props) => {

    const dispatch = useDispatch()
    const deleteFromBuyList =(id:number)=>{
        dispatch(deleteFromBuyListTC(id))
    }
    return (
        <BuyItem name={props.name}
                 value={props.value}
                 status={props.status}
                 priority={props.priority}
                 price={props.price}
                 id={props.id}
                 deleteItem={deleteFromBuyList}
        />
    );
}



export default BuyItemContainer;