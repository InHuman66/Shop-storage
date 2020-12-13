import React from 'react';
import classes from "./AddItem.module.css";
import {NavLink} from "react-router-dom";
import {FormikProps} from "formik";
import {FormikValuesType} from "./AddItemContainer";



type propTypes ={
    formik: FormikProps<FormikValuesType>
}


const AddItem:React.FC<propTypes>= (props) => {
    return (
    <div className={classes.blockAddItem}>
        <div>
            <NavLink to={ '/ShopList'} className={classes.go_back_button}>Go back</NavLink>
        </div>
        <form onSubmit={props.formik.handleSubmit}>
            <div className={classes.wrapperBlock}>
                <p>Name: </p>
                <input {...props.formik.getFieldProps('name')} placeholder={'name item'}/>
            </div>
            <div className={classes.wrapperBlock}>
                <p>is it there? </p>
                <input type={'checkbox'} placeholder={'Status'}/>
            </div>
            <div className={classes.wrapperBlock}>
                <p>Priority: </p>
                <input {...props.formik.getFieldProps('priority')} type={'number'} min={'1'} max={'5'} placeholder={'1-5'}/>
            </div>
            <div className={classes.wrapperBlock}>
                <p>Value: </p>
                <input {...props.formik.getFieldProps('value')} type={'number'} min={'0'} placeholder={'1-5'}/>
            </div>
            <div className={classes.wrapperBlock}>
                <p>price: </p>
                <input {...props.formik.getFieldProps('price')} type={'number'} min={'0'} placeholder={'1-5'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
    );
}
export default AddItem;