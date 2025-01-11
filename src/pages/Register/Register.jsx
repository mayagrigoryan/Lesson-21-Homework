import React, { useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import style from '../Login/Login.module.css'
import * as Yup from 'yup'
import { MyContext } from '../../context/context'

function Register() {
    const { addUsers } = useContext(MyContext);
    const navigate = useNavigate()

    const validUser = (user) => {
        delete user.confirmPassword
        user.id = crypto.randomUUID
        addUsers(user)
        navigate(`/profile/${user.id}`, { state: user })
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(4, 'Password must be at least 4 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    })

    return (
        <div className={style.inputs}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => validUser(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field
                            id="name"
                            className={style.input}
                            name="name"
                            placeholder="Name"
                        />
                        {errors.name && touched.name && (
                            <div className={style.error}>{errors.name}</div>
                        )}

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            className={style.input}
                            name="email"
                            placeholder="Email"
                        />
                        {errors.email && touched.email && (
                            <div className={style.error}>{errors.email}</div>
                        )}

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            className={style.input}
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        {errors.password && touched.password && (
                            <div className={style.error}>{errors.password}</div>
                        )}

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field
                            id="confirmPassword"
                            className={style.input}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <div className={style.error}>{errors.confirmPassword}</div>
                        )}

                        <button className={style.loginButton} type="submit">
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register