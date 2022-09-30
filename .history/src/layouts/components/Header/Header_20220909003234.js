import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Search from '../Search';
import routesConfig from '~/config/routes';
import { BsCloudUpload, BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import ModalOverlay from '~/components/ModalOverlay';
import { useEffect, useState } from 'react';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);
const INITMODE = localStorage.getItem('CHANGEMODE');
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboards shortcuts',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/quynhhh',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        // to: '/',
        separate: true,
    },
];

const isLogin = localStorage.getItem('USER_LOG_IN');
const userLogIn = null;
const status = false;
const item = isLogin ? userMenu : MENU_ITEMS;

function Header() {
    const [currentUser, setCurrentUser] = useState({ userLogIn, status });
    const [login, setLogin] = useState(false);

    const [state] = useStore();
    useEffect(() => {
        if (state.userLogIn?.userLogIn !== null) {
            setCurrentUser(state.userLogIn);
        }
    }, [state]);

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const HandleLogin = () => {
        setLogin(true);
    };

    // change styles mode
    console.log(INITMODE);
    const [isDark, setIsDark] = useState(localStorage.setItem(false));
    const rootStyles = document.documentElement.style;
    const handleDarkMode = () => {
        if (!isDark) {
            rootStyles.setProperty('--primary', 'blue');
            rootStyles.setProperty('--bg-color', '#202122');
            rootStyles.setProperty('--bg-color-hover', '#28282b');
            rootStyles.setProperty('--bg-gray', '#161718');
            rootStyles.setProperty('--bg-color-btn-fl', '#1772e9');
            rootStyles.setProperty('--bg-color-hover-btn-fl', '#63a4f8');
            rootStyles.setProperty('--bg-color-btn-following', 'black');
            rootStyles.setProperty('--bg-color-hover-btn-following', '#8cb2e4');
            rootStyles.setProperty('--bg-modal-color', 'rgba(255, 255, 255, 0.5)');
            rootStyles.setProperty('--bg-color-sidebar', '#222324');

            rootStyles.setProperty('--text-color-black', 'white');
            rootStyles.setProperty('--text-color-white', 'black');
            rootStyles.setProperty('--text-color-gray', '#b8c8d8');

            rootStyles.setProperty('--tick-color', '#20d5ec');
            rootStyles.setProperty('--border-color', '#2f2f30');
            rootStyles.setProperty('--box-shadow', '0px 1px 1px rgb(255 255 255 / 12%)');
            rootStyles.setProperty('--box-shadow-share', '1px 1px 2px 2px rgba(255, 255, 255, 0.2)');
            rootStyles.setProperty('--scroll-color', 'rgba(255, 255, 255, 0.15)');
            rootStyles.setProperty('--transparent-color', 'transparent');

            rootStyles.setProperty('--white', 'black');
            rootStyles.setProperty('--black', 'white');
            setIsDark(true);
            localStorage.setItem('CHANGEMODE', true);
        } else {
            setIsDark(false);

            window.location.reload();
        }
    };
    return (
        <header className={cx('wrapper')}>
            {login ? <ModalOverlay setLogin={setLogin} /> : ''}
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo-link')}>
                    <img className={cx('logo-image')} src={images.logo} alt="TikTok" />
                </Link>

                {/* search */}

                <div className={cx('search')}>
                    <Search />
                </div>

                <div className={cx('actions')}>
                    <div className={cx('switch', isDark && 'turn-on')} onClick={handleDarkMode}>
                        <p className={cx('switch-inner')}></p>
                        <BsSun />
                        <BsFillMoonStarsFill />
                    </div>

                    {currentUser?.status ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload Video" placement="bottom">
                                <Link to="/upload">
                                    <button className={cx('action-btn')}>
                                        <BsCloudUpload />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <Link to="/">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon className={cx('message-icon')} />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Link to="/upload">
                                <Button text>Upload</Button>
                            </Link>
                            <Button primary onClick={HandleLogin}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={item} onChange={handleMenuChange}>
                        {currentUser?.status ? (
                            <Image src={JSON.parse(currentUser?.userLogIn).avatar} className={cx('user-avatar')} />
                        ) : (
                            // </Link>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
