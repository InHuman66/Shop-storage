import React from 'react';
import classes from "./BuyList.module.css";
import ShopItem from "../item/ShopItem";
import {ItemsList} from "../../bll/Reducers/app-reducer";
import ShopItemContainer from '../item/ShopItemContainer';
import BuyItemContainer from "./BuyItem/BuyItemContainer";

type PropsType ={
    listItems: ItemsList
}

const BuyList: React.FC<PropsType>= (props) => {
    return (
        <div className={' container'}>
            <div className={classes.wrapper_content}>
                    {props.listItems.map(item => <BuyItemContainer name={item.name}
                                                                   value={item.value}
                                                                   status={item.status}
                                                                   priority={item.priority}
                                                                   price={item.price}
                                                                   id={item.id}
                    />)}
            </div>
        </div>
    );
}
export default BuyList;