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
import { BsCloudUpload } from 'react-icons/bs';
import ModalOverlay from '~/components/ModalOverlay';
import { useEffect, useState } from 'react';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);

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
    // const [item, setItem] = useState(MENU_ITEMS);

    const [state] = useStore();
    // console.log(state);
    useEffect(() => {
        if (state.userLogIn?.userLogIn !== null) {
            setCurrentUser(state.userLogIn);
            // setItem(userMenu);
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

    const [isDark, setIsDark] = useState(true);
    const rootStyles = document.documentElement.style;
    // change styles
    rootStyles.setProperty('--primary', '#fe2c55');
    rootStyles.setProperty('--bg-color', 'black');
    rootStyles.setProperty('--bg-color-hover', 'rgba(22, 24, 35, 0.03)');
    rootStyles.setProperty('--bg-gray', '#f1f1f2');
    rootStyles.setProperty('--bg-color-btn-fl', '#fe2c55');
    rootStyles.setProperty('--bg-color-hover-btn-fl', '#fe2c550f');
    rootStyles.setProperty('--bg-color-btn-following', 'black');
    rootStyles.setProperty('--bg-color-hover-btn-following', '#1618230a');
    rootStyles.setProperty('--bg-modal-color', 'rgba(0, 0, 0, 0.5)');
    rootStyles.setProperty('--bg-color-sidebar', 'rgba(231, 228, 228, 0.1)');

    rootStyles.setProperty('--text-color-black', 'white');
    rootStyles.setProperty('--text-color-white', 'black');
    rootStyles.setProperty('--text-color-gray', '#2f3035bf');

    rootStyles.setProperty('--tick-color', '#20d5ec');
    rootStyles.setProperty('--border-color', '#1618231a');
    rootStyles.setProperty('--box-shadow', '0px 1px 1px rgb(0 0 0 / 12%)');
    rootStyles.setProperty('--box-shadow-share', '1px 1px 2px 2px rgba(0, 0, 0, 0.2)');
    rootStyles.setProperty('--scroll-color', 'rgba(0, 0, 0, 0.15)');
    rootStyles.setProperty('--transparent-color', 'transparent');
    // rootStyles.setProperty('--text-color-black', 'black');
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
