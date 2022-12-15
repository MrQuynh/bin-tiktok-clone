import classNames from 'classnames/bind';
import styles from './ModalOverlay.module.scss';
import { AiFillInstagram, AiOutlineClose, AiOutlineQrcode, AiOutlineUser } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoMdArrowBack } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useState, memo } from 'react';
import Qrcode from './LoginWith/Qrcode';
import SignUp from './LoginWith/SignUp';
import Email from './LoginWith/Email';

import Portal from '~/components/Portal';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const Login = ({ setLogin }) => {
    const [register, setRegister] = useState(true);
    const [qrcode, setQrcode] = useState('');
    const [homeHiden, setHomeHiden] = useState(false);

    // handleBack
    const handleBack = () => {
        setQrcode('');
        setHomeHiden(false);
    };
    // switch login
    const handleQrcode = () => {
        setQrcode('qrcode');
        setHomeHiden(true);
    };
    const handleEmail = () => {
        setQrcode('email');
        setHomeHiden(true);
    };

    // title login
    let titleLogin = <FormattedMessage id="login.title1" />;
    if (!register) {
        titleLogin = <FormattedMessage id="login.signUp" />;
    }
    if (qrcode === 'qrcode') {
        titleLogin = <FormattedMessage id="login.qr" />;
    } else if (qrcode === 'email') {
        titleLogin = <FormattedMessage id="login.email" />;
    }
    return (
        <div className={cx('login')}>
            {homeHiden && register ? <IoMdArrowBack className={cx('back-icon')} onClick={handleBack} /> : <></>}
            <AiOutlineClose className={cx('close-icon', 'close')} onClick={() => setLogin(false)} />
            <div className={cx('login-body')}>
                <div className={cx('title')}>{titleLogin}</div>
                {register ? (
                    <div className={cx('content')}>
                        {qrcode === 'qrcode' ? <Qrcode /> : qrcode === 'email' ? <Email setLogIn={setLogin} /> : <></>}

                        <div className={cx(homeHiden && 'home-hiden')}>
                            <Link to="#">
                                <div className={cx('channel-item')} onClick={handleQrcode}>
                                    <AiOutlineQrcode className={cx('chanel-icon')} />
                                    <p className={cx('chanel-text')}>
                                        <FormattedMessage id="login.qr" />
                                    </p>
                                </div>
                            </Link>
                            <Link to="#">
                                <div className={cx('channel-item')} onClick={handleEmail}>
                                    <AiOutlineUser className={cx('chanel-icon')} />
                                    <p className={cx('chanel-text')}>
                                        <FormattedMessage id="login.email" />
                                    </p>
                                </div>
                            </Link>
                            <Link to="#">
                                <div className={cx('channel-item')}>
                                    <BsFacebook className={cx('chanel-icon', 'facebook-icon')} />
                                    <p className={cx('chanel-text')}>
                                        <FormattedMessage id="login.facebook" />
                                    </p>
                                </div>
                            </Link>
                            <Link to="#">
                                <div className={cx('channel-item')}>
                                    <FcGoogle className={cx('chanel-icon')} />
                                    <p className={cx('chanel-text')}>
                                        <FormattedMessage id="login.google" />
                                    </p>
                                </div>
                            </Link>
                            <Link to="#">
                                <div className={cx('channel-item')}>
                                    <AiFillInstagram className={cx('chanel-icon', 'instagram-icon')} />
                                    <p className={cx('chanel-text')}>
                                        <FormattedMessage id="login.instagram" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <SignUp />
                )}
            </div>
            <div className={cx('switch')}>
                <p>{register ? <FormattedMessage id="login.don" /> : <FormattedMessage id="login.already" />}</p>
                {register ? (
                    <div
                        className={cx('switch-signup')}
                        onClick={() => {
                            setRegister(false);
                            setQrcode('');
                        }}
                    >
                        <FormattedMessage id="login.signUp" />
                    </div>
                ) : (
                    <div
                        className={cx('switch-signup')}
                        onClick={() => {
                            setRegister(true);
                            setHomeHiden(false);
                        }}
                    >
                        <FormattedMessage id="login.signUp" />
                    </div>
                )}
            </div>
        </div>
    );
};

function ModalOverlay({ setLogin }) {
    return (
        <Portal>
            <div className={cx('wrapper')} onClick={() => setLogin(false)}>
                <div className={cx('body')} onClick={(e) => e.stopPropagation()}>
                    <Login setLogin={setLogin} />
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalOverlay);
