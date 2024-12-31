import React from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(4, 'Password should be at least 4 characters long')
        .required('Password is required'),
});

function Login({ users }) {
    const navigate = useNavigate()
    const userValidation = (values) => {
        const user = users.find((u) => u.email === values.email)
        if (user) {
            let isActivate = user.password === values.password
            if (isActivate) {
                navigate(`/profile/${user.id}`, { state: user })
            }
        }
    }

    return (
        <div>
            <Formik initialValues={{
                email: '',
                password: '',
            }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    userValidation(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className={style.inputs}>
                        <label htmlFor="email">Email</label>
                        <Field className={style.input} placeholder='email' name='email' id='email' />
                        {errors.email && touched.email ? (
                            <div className={style.error}>{errors.email}</div>
                        ) : null}

                        <label htmlFor="password">Password</label>
                        <Field className={style.input} placeholder='password' name='password' id='password' />
                        {errors.password && touched.password ? (
                            <div className={style.error}>{errors.password}</div>
                        ) : null}

                        <div className={style.buttonWrap}>
                            <button className={style.loginButton} type='submit'>Log in</button>
                            <NavLink className={style.loginButton} to='/register'>Registration</NavLink>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default Login