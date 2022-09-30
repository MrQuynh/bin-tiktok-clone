import styles from './SignUp.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
// import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as userService from '~/services/userService';
import { useStore } from '~/hooks';
import { actions } from '~/store';

const cx = classNames.bind(styles);

const SignUp = () => {
    const msg = {
        nameMess: 'Please enter your name',
        // nicknameMess: 'Please enter your nickname',
        passMess: 'Enter a new password',
        confirmMess: 'Confirm your password',
    };

    const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');

    const [message, setMessage] = useState({ nameMess: '', nicknameMess: '', passMess: '', confirmMess: '' });

    const handleOnChangeName = (e) => {
        setName(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };

    // const handleOnChangeNickname = (e) => {
    //     setNickname(e.target.value);
    //     setMessage({ ...message, [e.target.name]: '' });
    // };
    const handleOnChangePass = (e) => {
        setPass(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };
    const handleOnChangeConfirm = (e) => {
        setConfirm(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };
    const handleOnBlur = (e) => {
        //
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
            if (e.target.name === 'confirmMess') {
                e.target.value === pass
                    ? setMessage({ ...message, [e.target.name]: '' })
                    : setMessage({ ...message, [e.target.name]: 'Your password is not correct!' });
            }
        }
    };
    // typpy
    // const months = [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'November',
    // ];
    // const days = [
    //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 26, 27, 28, 29,
    //     30,
    // ];
    // const year = [
    //     1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    //     2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
    // ];

    // handleOnMonth
    // const [thang, setThang] = useState('');
    // const [ngay, setNgay] = useState('');
    // const [nam, setNam] = useState('');

    // const [chooseThang, setChooseThang] = useState(false);
    // const [chooseNgay, setChooseNgay] = useState(false);
    // const [chooseNam, setChooseNam] = useState(false);

    // const handleOnMonth = () => {
    //     setChooseThang(!chooseThang);
    // };
    // const handleOnDate = () => {
    //     setChooseNgay(!chooseNgay);
    // };
    // const handleOnYear = () => {
    //     setChooseNam(!chooseNam);
    // };
    // submit
    const [errMessage, setErrMessage] = useState('');

    const [state, dispatch] = useStore();

    const dataSend = { type: 'email', email: name, password: pass };
    const onSubmit = () => {
        console.log(name, pass);
        userService.postRegister(dataSend).then((data) => {
            if (!data?.data) {
                dispatch(actions.userLogIn(data));
                localStorage.setItem('USER_LOG_IN', JSON.stringify(data));
                // setErrMessage('Success');
                // setLogIn(false);
                window.location.reload();
            } else {
                setErrMessage('Your email is exited already. Please try again!');
            }
        });
    };
    //

    return (
        <div className={cx('signup-body')}>
            <form className={cx('form')}>
                <div className={cx('div-label')}>Create your account</div>
                <div>
                    {/* , 'invalid' */}
                    <div className={cx('div-form', 'border', message.nameMess && 'invalid')}>
                        <input
                            value={name}
                            name="nameMess"
                            min="6"
                            onChange={handleOnChangeName}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="text"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.nameMess}</p>
                </div>
                {/* <div>
                    <div className={cx('div-form', 'border', message.nicknameMess && 'invalid')}>
                        <input
                            name="nicknameMess"
                            value={nickname}
                            onChange={handleOnChangeNickname}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="text"
                            placeholder="Enter your Nickname"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.nicknameMess}</p>
                </div> */}
                <div>
                    <div className={cx('div-form', 'border', message.passMess && 'invalid')}>
                        <input
                            name="passMess"
                            value={pass}
                            onChange={handleOnChangePass}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="password"
                            placeholder="Enter new password"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.passMess}</p>
                </div>
                <div>
                    <div className={cx('div-form', 'border', message.confirmMess && 'invalid')}>
                        <input
                            name="confirmMess"
                            value={confirm}
                            onChange={handleOnChangeConfirm}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="password"
                            placeholder="Password confirm"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.confirmMess}</p>
                </div>
                {/* <div className={cx('div-label')}>When's your birthday?</div>
                <div className={cx('div-form')}>
                    <div className={cx('box')} onClick={handleOnMonth}>
                        <div className={cx('box-text')}>{thang || 'Month'}</div>
                        <AiFillCaretDown className={cx('down-icon')} />
                        {chooseThang && (
                            <div className={cx('tippy-box', 'box-active')}>
                                {months.map((month, index) => (
                                    <p key={index} className={cx('tippy-month')} onClick={() => setThang(month)}>
                                        {month}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={cx('box')} onClick={handleOnDate}>
                        <div>{ngay || 'Day'}</div>
                        <AiFillCaretDown className={cx('down-icon')} />
                        {chooseNgay && (
                            <div className={cx('tippy-box', 'box-active')}>
                                {days.map((month, index) => (
                                    <p key={index} className={cx('tippy-month')} onClick={() => setNgay(month)}>
                                        {month}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={cx('box', 'year')} onClick={handleOnYear}>
                        <div>{nam || 'Nam'}</div>
                        <AiFillCaretDown className={cx('down-icon')} />
                        {chooseNam && (
                            <div className={cx('tippy-box', 'box-active')}>
                                {year.map((month, index) => (
                                    <p key={index} className={cx('tippy-month')} onClick={() => setNam(month)}>
                                        {month}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('div-label', 'birthday')}>Your birthday won't be shown publicly.</div>
                <div className={cx('div-label')}>
                    Phone{' '}
                    <Link to="#" className={cx('div-label', 'email')}>
                        Sign up with email
                    </Link>
                </div>
                <div className={cx('div-form', 'border')}>
                    <div className={cx('box', 'phone')}>
                        <div className={cx('area')}>
                            <div>VN +84</div>
                            <AiFillCaretDown className={cx('down-icon')} />
                        </div>
                        <input className={cx('input')} type="text" placeholder="Phone number" />
                    </div>
                </div>

                <div className={cx('div-form', 'border')}>
                    <input className={cx('input')} type="text" placeholder="Enter 6-digit code" />
                    <button className={cx('code-btn')}>Send code</button>
                </div>*/}
                <div className={cx('errMessage')}>{errMessage}</div>
                <button type="button" className={cx('submit-btn')} onClick={onSubmit}>
                    Sign up
                </button>
            </form>

            <div className={cx('signup-footer')}>
                By continuing, you agree to TikTok
                <span>
                    <Link to="#">Terms of Service</Link>
                </span>
                and confirm that you have read TikTok
                <span>
                    <Link to="#">Privacy Policy</Link>
                </span>
                .
            </div>
        </div>
    );
};

export default SignUp;
