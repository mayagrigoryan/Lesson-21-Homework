import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import style from './OrderForm.module.css'

const region = ['Yerevan', 'Abovyan', 'Gyumri']

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name should be at least 2 characters long')
        .max(50, 'Name should not exceed 50 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    region: Yup.string().required('Region is required'),
})

function OrderForm() {
    return (
        <div className={style.form}>
            <h2>Delivery Details:</h2>
            <Formik initialValues={{
                name: '',
                email: '',
                region: '',
            }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({ errors, touched }) => (
                    <Form className={style.inputs}>
                    <label htmlFor="name">Name*</label>
                    <Field className={style.input} placeholder='name' name='name' id='name' />
                    {errors.name && touched.name ? (
                        <div className={style.error}>{errors.name}</div>
                    ) : null}

                    <label htmlFor="email">Email*</label>
                    <Field className={style.input} placeholder='email' name='email' id='email' />
                    {errors.email && touched.email ? (
                        <div className={style.error}>{errors.email}</div>
                    ) : null}

                    <label htmlFor="region">Region*</label>
                    <Field as="select" className={style.input} name="region" id="region">
                        <option value="">Select a region</option>
                        {region.map((reg, index) => (
                            <option key={index} value={reg}>
                                {reg}
                            </option>
                        ))}
                    </Field>
                    {errors.region && touched.region ? (
                        <div className={style.error}>{errors.region}</div>
                    ) : null}

                    <button className={style.orderButton} type='submit'>Order</button>
                </Form>
                )}
                
            </Formik>
        </div>
    )
}

export default OrderForm