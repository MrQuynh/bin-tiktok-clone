import classNames from 'classnames/bind';
import { createBrowserHistory } from 'history';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);
const navLists = [
    {
        icon: <BiArrowBack />,
        text: 'Manage account',
    },
    {
        icon: <AiOutlineUser />,
        text: 'Privacy',
    },
    {
        icon: <AiOutlineLock />,
        text: 'Push notifications',
    },
];

function Settings() {
    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    {navLists.map((navItem, index) => (
                        <div className={cx('nav', 'active')} key={index}>
                            <div className={cx('nav-icon')}>{navItem.icon}</div>
                            <div className={cx('nav-content')}>{navItem.text}</div>
                        </div>
                    ))}
                    {/* <div className={cx('back-icon')} onClick={goBack}>
                        <BiArrowBack />
                    </div>
                    <div className={cx('nav', 'active')}>
                        <div className={cx('nav-icon')}>
                            <AiOutlineUser />
                        </div>
                        <div className={cx('nav-content')}>Manage account</div>
                    </div>

                    <div className={cx('nav')}>
                        <div className={cx('nav-icon')}>
                            <AiOutlineLock />
                        </div>
                        <div className={cx('nav-content')}>Privacy</div>
                    </div>

                    <div className={cx('nav')}>
                        <div className={cx('nav-icon')}>
                            <BsBell />
                        </div>
                        <div className={cx('nav-content')}>Push notifications</div>
                    </div> */}
                </div>
                <div className={cx('right')}></div>
            </div>
        </div>
    );
}

export default Settings;
