import React, {useState} from 'react';
import classes from "./ShopList.module.css";
import ShopItem from "../item/ShopItem";
import {ItemsList} from "../../bll/Reducers/app-reducer";
import ShopItemContainer from '../item/ShopItemContainer';

type PropsType ={
    listItems: ItemsList
}

const ShopList: React.FC<PropsType>= (props) => {

    let listItemLocal = []as ItemsList
    let [styleForButtonFilter, setStyleForButtonFilter] = useState('All')
    const onClickFilter =(status:string)=>{
        setStyleForButtonFilter(status)
    }

    if(styleForButtonFilter === 'All'){
        listItemLocal = props.listItems
    }else if(styleForButtonFilter === 'None'){
        listItemLocal = props.listItems.filter(item=> item.status === 'none')
    }
    else if(styleForButtonFilter === 'There is'){
        listItemLocal = props.listItems.filter(item=> item.status === 'there is')
    }
    console.log(styleForButtonFilter)
    return (
        <div className={' container'}>
            <div className={classes.wrapper_content}>
                <div className={classes.menu_style}>
                    <button className={classes.button_add_item}>Add item</button>
                    <div className={classes.filter_status_block}>
                        <p>Status Filter:</p>
                        <button onClick={()=>{onClickFilter('All')}} className={classes.button_filter_Normal}>All</button>
                        <button onClick={()=>{onClickFilter('None')}} className={classes.button_filter_Normal}>None</button>
                        <button onClick={()=>{onClickFilter('There is')}} className={classes.button_filter_Normal}>There is</button>
                    </div>
                </div>
                <div className={classes.wrapper_item_block +' row'}>
                    {listItemLocal.map( item => <ShopItemContainer
                                                    key={item.id}
                                                    id={item.id}
                                                    name={item.name}
                                                    status={item.status}
                                                    priority={item.priority}
                    />)}
                </div>
            </div>
        </div>
    );
}
export default ShopList;