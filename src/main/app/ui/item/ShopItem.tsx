import React, {useEffect} from 'react';
import classes from "./ShopItem.module.css";
import EditableSpan from "../Features/EditableSpan";




type PropsTypeItem ={
    name: string
    id: number
    status: string
    priority: string
    deleteOnClick: (id:number)=>void
    addInBuyListOnclick: (id:number)=>void
    itemInBuyList:boolean
    onChangePriority: (value:string, id: number)=>void
}
const ShopItem: React.FC<PropsTypeItem>= (props) => {
    return (
        <div key={props.id} className={'col-4'}>
            <div className={classes.backGround_item}>
                <div>
                    <h1 className={classes.item_name_txt}>Name: {props.name}</h1>
                    <p className={classes.item_status_txt}>Status: {props.status}</p>
                    <div className={classes.content_position_priority}>
                        <h1 className={classes.item_priority_txt}>Priority:</h1>
                        <EditableSpan id={props.id} style={classes.item_priority_value_txt} value={props.priority} onChange={props.onChangePriority}/>
                        {/*<p onClick={()=>{props}} className={classes.item_priority_value_txt}> {props.priority}</p>*/}
                    </div>
                    {props.itemInBuyList ?  <p>Already in Buy List</p> : <button onClick={()=>{props.addInBuyListOnclick(props.id)}} className={classes.button_add_list}>Add in buy list</button>}
                </div>
                <div>
                    <button onClick={()=>{props.deleteOnClick(props.id)}} className={classes.button_delete}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default ShopItem;