import classNames from 'classnames/bind';
import { createBrowserHistory } from 'history';
import { useState } from 'react';
import { AiFillCaretDown, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import styles from './Settings.module.scss';

import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import { FcNext } from 'react-icons/fc';

const cx = classNames.bind(styles);
const navLists = [
    {
        icon: <AiOutlineUser />,
        text: 'Manage account',
    },
    {
        icon: <AiOutlineLock />,
        text: 'Privacy',
    },
    {
        icon: <BsBell />,
        text: 'Push notifications',
    },
];

function Settings() {
    const [isActive, setIsActive] = useState(false);
    const [runcheck, setRuncheck] = useState(false);

    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };

    const handleActive = (e) => {
        // e.target.classList.add('active');
        setIsActive(!isActive);
        // console.log(e.target.dataset.index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('back-icon')} onClick={goBack}>
                        <BiArrowBack />
                    </div>

                    {navLists.map((navItem, index) => (
                        <div className={cx('nav')} data-index={index} key={index} onClick={handleActive}>
                            <div className={cx('nav-icon')} data-index={index}>
                                {navItem.icon}
                            </div>
                            <div className={cx('nav-content')} data-index={index}>
                                {navItem.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('right')}>
                    <div className={cx('row')}>
                        <div className={cx('title')}>Manage account</div>
                        <div className={cx('body')}>
                            <div className={cx('group')}>
                                <div className={cx('sub-title')}>Account control</div>
                                <div className={cx('option')}>
                                    <p>Delete Account</p>
                                    <p>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('title')}>Privacy</div>
                        <div className={cx('body')}>
                            <div className={cx('group')}>
                                <div className={cx('sub-title')}>Discoverability</div>
                                <div className={cx('option')}>
                                    <p>Private account</p>
                                    <div className={cx('label', 'label-run')}>
                                        <p> Run a copyright check</p>{' '}
                                        <div
                                            className={cx('switch', runcheck && 'turn-on')}
                                            onClick={() => setRuncheck(!runcheck)}
                                        >
                                            <p className={cx('switch-inner')}></p>
                                        </div>
                                    </div>
                                </div>
                                <p className={cx('description')}>
                                    With a private account, only users you approve can follow you and watch your videos.
                                    Your existing followers won't be affected.
                                </p>
                            </div>
                            <div className={cx('group')}>
                                <div className={cx('sub-title')}>Data</div>
                                <div className={cx('option')}>
                                    <p>Download your data</p>
                                    <FcNext />
                                </div>
                                <p className={cx('description')}>Get a copy of your TikTok data</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('title')}>Push notifications</div>
                        <div className={cx('body')}>
                            <div className={cx('group')}>
                                <div className={cx('sub-title')}>Desktop notifications</div>
                                <div className={cx('option')}>
                                    <p>Allow in browser</p>
                                </div>
                                <p className={cx('description')}>
                                    Stay on top of notifications for likes, comments, the latest videos, and more on
                                    desktop. You can turn them off anytime.
                                </p>
                            </div>

                            <div className={cx('group')}>
                                <div className={cx('sub-title')}>Your preferences</div>
                                <p className={cx('description')}>
                                    Your preferences will be synced automatically to the TikTok app.
                                </p>
                                <div className={cx('option')}>
                                    <p>Interactions</p>
                                    <AiFillCaretDown />
                                </div>
                                <p className={cx('description')}>Likes, comments, new followers, mentions and tags</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
