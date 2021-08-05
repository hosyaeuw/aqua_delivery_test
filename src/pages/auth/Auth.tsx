import React from 'react'
import { Form, Field } from 'react-final-form'
import { Redirect, useHistory } from 'react-router-dom'

import { Button } from '../../components'

import { IAuth } from '../../interfaces/user'

import { auth } from '../../services/requests'

import { getToken } from '../../utils/utils'

import banner from '../../static/imgs/banner.svg'

import './style.scss'

const Auth: React.FC = () => {
    const history = useHistory()
    const [btnDisabled, setBtnDisabled] = React.useState<boolean>(false)

    const onSubmit = (fields: IAuth, form: any) => {
        setBtnDisabled(true)
        auth(fields).then(({ data }) => {
            const token = data.data.auth_key
            if (fields.remember) {
                localStorage.setItem('token', token)
            } else {
                sessionStorage.setItem('token', token)
            }
            history.push('/')
            form.reset()
        })
        setBtnDisabled(false)
    }

    return (
        <div className="auth">
            {!!getToken() ? <Redirect to="/" /> :
                <>
                    <img src={banner} alt="banner" className="auth__banner" />
                    <h1>Sign in to aqua delivery</h1>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} className="form">
                                <div className="form__field">
                                    <label className="label label_input" htmlFor="login">Логин</label>
                                    <Field name="login" initialValue="">
                                        {({ input }) => <input required className="input" type="text" placeholder="Введите логин" id="login" {...input} />}
                                    </Field>
                                </div>
                                <div className="form__field">
                                    <label className="label label_input" htmlFor="password">Пароль</label>
                                    <Field name="password" initialValue="">
                                        {({ input }) => <input required className="input input_password" type="password" placeholder="Введите пароль" id="password" {...input} />}
                                    </Field>
                                </div>
                                <div className="form__field form__field_checkbox">
                                    <Field name="remember" type="checkbox">
                                        {({ input }) => <input type="checkbox" id="remember" {...input} />}
                                    </Field>
                                    <label htmlFor="remember" className="label">Запомнить меня</label>
                                </div>
                                <Button disabled={btnDisabled}>Авторизоваться</Button>
                            </form>
                        )}
                    />
                </>
            }
        </div>
    )
}

export default Auth
