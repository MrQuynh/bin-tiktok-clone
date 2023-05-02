import styles from './SignUp.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import * as userService from '~/services/userService';

import { useStore } from '~/hooks';
import { actions } from '~/store';

const cx = classNames.bind(styles);

function Email({ setLogIn }) {
    const msg = {
        nameMess: 'Please enter your email',
        passMess: 'Please enter your password',
    };

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [state, dispatch] = useStore();

    const [message, setMessage] = useState({ nameMess: '', passMess: '' });

    const handleOnChangeName = (e) => {
        setName(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };

    const handleOnChangePass = (e) => {
        setPass(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };

    const handleOnBlur = (e) => {
        const value = e.target.value;
        if (value === '') {
            setMessage({ ...message, [e.target.name]: msg[e.target.name] });
        } else {
            setMessage({ ...message, [e.target.name]: '' });
            if (e.target.name === 'passMess') {
                e.target.value.length < 6
                    ? setMessage({ ...message, [e.target.name]: 'Your pass needs to have more than 6 characters' })
                    : setMessage({ ...message, [e.target.name]: '' });
            }
        }
    };

    // login submit
    const dataSend = { email: name, password: pass };
    const submitLogIn = () => {
        if (!message.passMess) {
            userService.postLogin(dataSend).then((bigData) => {
                if (!bigData?.data?.data) {
                    dispatch(actions.userLogIn(bigData.data));
                    localStorage.setItem('USER_LOG_IN', JSON.stringify(bigData.data));
                    localStorage.setItem('TOKEN', JSON.stringify(bigData.meta.token));
                    setErrMessage('success');
                    setLogIn(false);
                    window.location.reload();
                } else {
                    setErrMessage('Your email or password is not correct. Plz try again!');
                }
            });
        }
        //
    };

    return (
        <div className={cx('signup-body')}>
            <form className={cx('form')}>
                <div className={cx('div-label')}>Email</div>
                <div>
                    <div className={cx('div-form', 'border', message.nameMess && 'invalid')}>
                        <input
                            value={name}
                            name="nameMess"
                            onChange={handleOnChangeName}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="text"
                            placeholder="Enter your email"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.nameMess}</p>
                </div>
                <div className={cx('div-label')}>Password</div>

                <div>
                    <div className={cx('div-form', 'border', message.passMess && 'invalid')}>
                        <input
                            name="passMess"
                            value={pass}
                            onChange={handleOnChangePass}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.passMess}</p>
                </div>
                <div>
                    <div className={cx('errMessage')}>{errMessage}</div>
                    <Link to="#">
                        <div className={cx('form-message', 'forgot')}>Forgot your password!</div>
                    </Link>
                </div>

                <Button to="/" type="button" primary large className={cx('submit-btn')} onClick={submitLogIn}>
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default Email;
