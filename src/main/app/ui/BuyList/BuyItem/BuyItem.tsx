import React from 'react';
import classes from "./BuyItem.module.css";

type PropsTypeItem ={
    name:string
    value:number
    status: string
    priority: number
    price: number
    id:number
    deleteItem:(id:number)=>void
}

const BuyItem: React.FC<PropsTypeItem>= (props) => {
    return (
        <div className={classes.item_module}>
            <div className={classes.item_info}>
                <button className={classes.button_delete} onClick={()=>{props.deleteItem(props.id)}}>X</button>
                <div className={classes.name_item}>
                    <p>Name: {props.name}</p>
                </div>
                <div>
                    <p>Priority: {props.priority}</p>
                </div>
                <div>
                    <p>Status: {props.status}</p>
                </div>
                <div>
                    <p>Price: {props.price}</p>
                </div>
            </div>
        </div>
    );
}



export default BuyItem;