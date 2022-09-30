import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import PropTypes from 'prop-types';

import styles from './SuggestAccounts.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SuggestAccounts({ label, data = [], onViewChange, seeMore }) {
    const [isFollowBtn, setIsFollowBtn] = useState(false);

    useEffect(() => {
        if (label === 'Following accounts') {
            setIsFollowBtn(true);
        }
    }, [label]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>{label}</div>

            {data.map((user, index) => (
                <AccountItem key={index} data={user} isFollowBtn={isFollowBtn} />
            ))}

            <p className={cx('more-btn')} onClick={onViewChange}>
                {seeMore ? 'See more' : 'See less'}
            </p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestAccounts;
