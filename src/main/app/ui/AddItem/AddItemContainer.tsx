import React from 'react';
import {useFormik} from "formik";
import { Redirect } from 'react-router-dom';
import AddItem from "./AddItem";

export type FormikValuesType ={
    name: string
    status: boolean
    priority: number
    value: number
    price: number
}


const AddItemContainer= () => {
    type FormikErrorType = {
        name?: string
        status?: boolean
        priority?: number
        value?: number
        price?: number
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            status: false,
            priority: 1,
            value: 0,
            price: 0,
        },
        validate:(values)=>{
            const errors: FormikErrorType = {};
            // if (!values.email) {
            //     errors.email = 'Required';
            // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            //     errors.email = 'Invalid email address';
            // }
            // if (!values.password) {
            //     errors.password = 'Required';
            // } else if (values.password.length < 8) {
            //     errors.password = 'Password must be at least 8 characters long';
            // }

            return errors;
        },
        onSubmit: values => {
            console.log('submit')
        },
    });

    return (
        <AddItem formik={formik}/>
    )
        ;
}

export default  AddItemContainer;