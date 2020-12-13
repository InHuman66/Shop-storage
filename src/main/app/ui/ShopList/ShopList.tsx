import React, {useEffect, useState} from 'react';
import classes from "./ShopList.module.css";
import ShopItem from "../item/ShopItem";
import {filterValueType, ItemsList, sortValueType} from "../../bll/Reducers/ShopList-reducer";
import ShopItemContainer from '../item/ShopItemContainer';
import BuyListContainer from "../BuyList/BuyListContainer";
import {NavLink, Route} from "react-router-dom";
import AddItem from "../AddItem/AddItem";
import AddItemContainer from '../AddItem/AddItemContainer';

type PropsType ={
    listItems: ItemsList
    filterSort: (filter:filterValueType, sort:sortValueType)=>void
}

const ShopList: React.FC<PropsType>= (props) => {
    let [styleForButtonFilter, setStyleForButtonFilter] = useState <filterValueType>('All')
    let [styleForButtonSort, setStyleForButtonSort]= useState <sortValueType>('Normal')

    const onClickFilter =(status:filterValueType)=>{
        setStyleForButtonFilter(status)
        props.filterSort(status, styleForButtonSort)
    }
    const onClickSort =(status:sortValueType)=>{
        setStyleForButtonSort(status)
        props.filterSort(styleForButtonFilter, status)
    }
    useEffect(()=>{
        props.filterSort(styleForButtonFilter, styleForButtonSort)
    },[])
    return (
        <div className={' container'}>
            <div className={classes.wrapper_content}>
                <div className={classes.menu_style}>
                    {/*<button className={classes.button_add_item}>Add item</button>*/}
                    <NavLink to={ '/ShopList/addItem'} className={classes.button_add_item}>Add item</NavLink>
                    <div className={classes.filter_status_block}>
                        <p>Status Filter:</p>
                        <button onClick={()=>{onClickFilter('All')}} className={ styleForButtonFilter === 'All' ? classes.button_filter_Focus : classes.button_filter_Normal }>All</button>
                        <button onClick={()=>{onClickFilter('None')}} className={styleForButtonFilter === 'None' ? classes.button_filter_Focus : classes.button_filter_Normal}>None</button>
                        <button onClick={()=>{onClickFilter('There is')}} className={styleForButtonFilter === 'There is' ? classes.button_filter_Focus : classes.button_filter_Normal}>There is</button>
                    </div>
                    <div className={classes.filter_status_block}>
                        <p>Sort priority:</p>
                        <button onClick={()=>{onClickSort('Normal')}} className={styleForButtonSort === 'Normal' ? classes.button_filter_Focus : classes.button_filter_Normal}>Normal</button>
                        <button onClick={()=>{onClickSort('Smallest')}} className={styleForButtonSort === 'Smallest' ? classes.button_filter_Focus : classes.button_filter_Normal }>Smallest</button>
                        <button onClick={()=>{onClickSort('Biggest')}} className={styleForButtonSort === 'Biggest' ? classes.button_filter_Focus : classes.button_filter_Normal}>Biggest</button>
                    </div>
                </div>
                <Route exact path={'/ShopList'} render={()=>
                    <div className={classes.wrapper_item_block +' row'}>
                        {props.listItems.map( item => <ShopItemContainer
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            status={item.status}
                            priority={item.priority}
                            itemInBuyList={item.itemInBuyList}
                        />)}
                    </div>
                }/>
                <Route path={'/ShopList/addItem'} render={()=>
                    <div>
                        <AddItemContainer/>
                    </div>
                }/>
            </div>
        </div>
    );
}
export default ShopList;