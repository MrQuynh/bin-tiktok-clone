import classNames from 'classnames/bind';
import { useState, memo } from 'react';
import { AiOutlineDown, AiOutlineHeart, AiOutlineUp } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './UserComment.module.scss';
import UserCommentMore from './UserCommentMore';

const cx = classNames.bind(styles);

const likeCommentCmt = 69;
const d = new Date();
function UserComment({ itemCmts }) {
    const dateNow = d.getDay();
    const dateCreate = +itemCmts.created_at.split(' ')[0].split('-')[2];
    const [showCmt, setShowCmt] = useState('hidden');
    const HandleTime = (time) => {};
    console.log(d);
    console.log(itemCmts.created_at);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <Link
                    to={{
                        pathname: '/@' + itemCmts.user.nickname,
                    }}
                >
                    <Image src={itemCmts.user.avatar} className={cx('avatar')} />
                </Link>
                <div className={cx('body')}>
                    <Link
                        to={{
                            pathname: '/@' + itemCmts.user.nickname,
                        }}
                    >
                        <p className={cx('nickname')}>{itemCmts.user.nickname}</p>
                    </Link>
                    <p className={cx('comment')}>{itemCmts.comment}</p>

                    <div className={cx('time')}>
                        <span>{-dateNow + dateCreate} day ago</span>
                        <span className={cx('reply')}>Reply</span>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <FiMoreHorizontal className={cx('actions-icon')} />
                    <div className={cx('actions-icon')}>
                        <AiOutlineHeart className={cx('icons')} />
                        <span>{likeCommentCmt}</span>
                    </div>
                </div>
            </div>
            <div className={cx('more-comments')}>
                <div className={cx('more', showCmt)}>
                    <UserCommentMore />
                    <UserCommentMore />
                    <UserCommentMore />
                </div>
                <div className={cx('more-comments-footer')}>
                    {showCmt === 'hidden' && (
                        <div onClick={() => setShowCmt('show')}>
                            View more replies (96) <AiOutlineDown className={cx('more-comments-icon')} />
                        </div>
                    )}
                    {showCmt === 'show' && (
                        <div className={cx('btn-hidden')} onClick={() => setShowCmt('hidden')}>
                            Hide <AiOutlineUp className={cx('more-comments-icon')} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default memo(UserComment);
