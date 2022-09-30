import classNames from 'classnames/bind';
import { createBrowserHistory } from 'history';
import { useState } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import styles from './Settings.module.scss';

import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';

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
    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };
    const handleActive = (e) => {
        // e.classList.add('active');
        // setIsActive(!isActive);
        console.log(e.target.dataset.index);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('back-icon')} onClick={goBack}>
                        <BiArrowBack />
                    </div>
                    <Menu>
                        <MenuItem
                            title="Manage account"
                            to="#"
                            icon={<AiOutlineUser style={{ color: 'blue' }} />}
                            activeIcon={<AiOutlineUser style={{ color: 'blue' }} />}
                        />
                        <MenuItem title="Primary" to="#" icon={<AiOutlineLock />} activeIcon={<AiOutlineLock />} />
                        <MenuItem title="Push notifications" to="#" icon={<BsBell />} activeIcon={<BsBell />} />
                    </Menu>
                    {/* {navLists.map((navItem, index) => (
                        <div
                            className={cx('nav', isActive && 'active')}
                            data-index={index}
                            key={index}
                            onClick={handleActive}
                        >
                            <div className={cx('nav-icon')} data-index={index}>
                                {navItem.icon}
                            </div>
                            <div className={cx('nav-content')} data-index={index}>
                                {navItem.text}
                            </div>
                        </div>
                    ))} */}
                </div>
                <div className={cx('right')}></div>
            </div>
        </div>
    );
}

export default Settings;
