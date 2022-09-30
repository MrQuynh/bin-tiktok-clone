import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Image from '../Image';
import styles from './FollowAccount.module.scss';

const cx = classNames.bind(styles);

function FollowAccount({ avatar, id, name, check, nickName, followers, like }) {
    const [follow, setFollow] = useState(false);

    const handleClick = () => {
        setFollow(!follow);
    };
    return (
        <div className={cx('account')}>
            <div className={cx('account-header')}>
                <Link to={{ pathname: '/@' + nickName, search: 'id=' + id }}>
                    <Image className={cx('avatar', 'large')} src={avatar} />
                </Link>

                {follow ? (
                    <Button outline className={cx('btn-account-follow', 'btn-small-account')} onClick={handleClick}>
                        Following
                    </Button>
                ) : (
                    <Button outline className={cx('btn-small-account')} onClick={handleClick}>
                        Follow
                    </Button>
                )}
            </div>
            <div className={cx('info-follow')}>
                <Link to={{ pathname: '/@' + nickName, search: 'id=' + id }}>
                    <h4 className={cx('nick-name', 'bold')}>
                        {nickName} {check && <AiFillCheckCircle className={cx('icon')} />}
                    </h4>
                </Link>
                <Link to={{ pathname: '/@' + nickName, search: 'id=' + id }}>
                    <p className={cx('name', 'medium')}>{name}</p>
                </Link>
                <div className={cx('vote-body')}>
                    <strong className={cx('vote')}>{followers}</strong> Followers
                    <strong className={cx('vote')}>{like}</strong> Likes
                </div>
            </div>
            <div className={cx('bio')}>
                <p className={cx('bio-text')}>Contact Instagram - Facebook 📩 {nickName}@gmail.com</p>
            </div>
        </div>
    );
}

export default FollowAccount;
