import React, { useEffect, useState } from 'react'
import styles from './Login.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Login = (props) => {
    const location = useLocation()
    const isLogin = location.pathname === '/login'
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [emailDirty, setEmailDirty] = useState(true)
    const [passwordDirty, setPasswordDirty] = useState(true)
    const [usernameDirty, setUsernameDirty] = useState(true)
    const [emailError, setEmailError] = useState('Email cannot be empty')
    const [passwordError, setPasswordError] = useState(
        'Password cannot be empty'
    )
    const [usernameError, setUsernameError] = useState(
        'Username cannot be empty'
    )
    const [isFormValid, setIsFormValid] = useState(false)
    useEffect(() => {
        if (emailError || passwordError || usernameError) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }, [emailError, passwordError, usernameError])

    const BlurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'username':
                setUsernameDirty(true)
                break
            default:
                return
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is not correct')
        } else {
            setEmailError('')
        }
    }
    const usernameHandler = (e) => {
        setUsername(e.target.value)
        if (!e.target.value) {
            setUsernameError('Username cannot be empty')
        } else {
            setUsernameError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 4) {
            setPasswordError('Password cannot be shorter than 4 symbols')
            if (!e.target.value) {
                setPasswordError('Password cannot be empty')
            }
        } else {
            setPasswordError('')
        }
    }

    const auth = (e) => {
        try {
            e.preventDefault()
            props.setCurrentUserData(
                {
                    email: email,
                    username: username,
                    password: password,
                },
                isLogin
            )

            navigate('/books')
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <div className={styles.window}>
            <div className={styles.auth}>
                <p> {isLogin ? 'Authorization' : 'Registration'}</p>
                <form action="">
                    <div className={styles.form}>
                        {usernameDirty && usernameError ? (
                            <div style={{ color: 'red' }}>{usernameError}</div>
                        ) : (
                            <div className={styles.pseudoLabel}>Username</div>
                        )}

                        <input
                            onChange={(e) => {
                                usernameHandler(e)
                            }}
                            onBlur={(e) => BlurHandler(e)}
                            value={username}
                            id="usernameInput"
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                        {emailDirty && emailError ? (
                            <div style={{ color: 'red' }}>{emailError}</div>
                        ) : (
                            <div className={styles.pseudoLabel}>Email</div>
                        )}

                        <input
                            onChange={(e) => emailHandler(e)}
                            onBlur={(e) => BlurHandler(e)}
                            value={email}
                            id="emailInput"
                            name="email"
                            type="text"
                            placeholder="Email"
                        />
                        {passwordDirty && passwordError ? (
                            <div style={{ color: 'red' }}>{passwordError}</div>
                        ) : (
                            <div className={styles.pseudoLabel}>Password</div>
                        )}
                        <input
                            onChange={(e) => passwordHandler(e)}
                            value={password}
                            onBlur={(e) => BlurHandler(e)}
                            id="passwordInput"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.text}>
                            {isLogin
                                ? 'Not registered?'
                                : 'Already have account?'}
                            <NavLink to={isLogin ? '/registration' : '/login'}>
                                {isLogin ? 'Register' : 'Log in'}
                            </NavLink>
                        </div>
                        <div>
                            {isLogin ? (
                                <button
                                    disabled={!isFormValid}
                                    className={styles.sendButton}
                                    onClick={auth}
                                >
                                    Login
                                </button>
                            ) : (
                                <button
                                    disabled={!isFormValid}
                                    className={styles.sendButton}
                                    onClick={auth}
                                >
                                    Register
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login
