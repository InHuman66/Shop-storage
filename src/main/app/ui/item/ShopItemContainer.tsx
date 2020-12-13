import React from 'react';
import ShopItem from "./ShopItem";
import {useDispatch} from "react-redux";
import {addInBuyListTC, deleteTC, editPriorityTC} from '../../bll/Reducers/ShopList-reducer';




type PropsTypeItem ={
    name: string
    id: number
    status: string
    priority: string
    itemInBuyList:boolean

}
const ShopItemContainer: React.FC<PropsTypeItem>= (props) => {
    const dispatch = useDispatch()

    let deleteOnclick =(id: number)=>{
        dispatch(deleteTC(id))
    }
    let addInBuyListOnclick =(id: number)=>{
        dispatch(addInBuyListTC(id))
    }

    const editPrioritySpan =(value:string, id:number)=>{
        dispatch(editPriorityTC(value, id))
    }
    return (
        <ShopItem  onChangePriority={editPrioritySpan} addInBuyListOnclick={addInBuyListOnclick} deleteOnClick={deleteOnclick} priority={props.priority} status={props.status} name={props.name} id={props.id} key={props.id} itemInBuyList={props.itemInBuyList}/>
    );
}


export default ShopItemContainer;