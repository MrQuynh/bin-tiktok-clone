import classNames from 'classnames/bind';
import { useState, memo } from 'react';
import { AiOutlineDown, AiOutlineHeart, AiOutlineUp } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './UserComment.module.scss';
import UserCommentMore from './UserCommentMore';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function UserComment({ itemCmts, setChange }) {
    const day = itemCmts.created_at.split(' ')[0].split('-')[2];
    const month = itemCmts.created_at.split(' ')[0].split('-')[1];
    const hour = itemCmts.created_at.split(' ')[1].split(':')[0];
    const minute = itemCmts.created_at.split(' ')[1].split(':')[1];

    const [showCmt, setShowCmt] = useState('hidden');
    const [isLikeCmt, setIsLikeCmt] = useState(itemCmts.is_liked);
    const [likeCommentCmt, setLikeCommentCmt] = useState(itemCmts.likes_count);

    const handleDeleteComment = () => {
        userService
            .deleteComment(itemCmts.id)
            .then(() => setChange(Math.random()))
            .catch((e) => console.log(e));
    };

    const handleLikeCmt = () => {
        if (itemCmts.id) {
            console.log(itemCmts.id);
            if (isLikeCmt) {
                userService.unlikeComment(itemCmts.id);
                setIsLikeCmt(!isLikeCmt);
                setLikeCommentCmt((prev) => prev - 1);
            } else {
                userService.likeComment(itemCmts.id);
                setIsLikeCmt(!isLikeCmt);
                setLikeCommentCmt((prev) => prev + 1);
            }
        }
    };
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
                        <span>{`${day} Tháng ${month} lúc ${hour}:${minute}`}</span>
                        <span className={cx('reply')}>Reply</span>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('actions-icon', 'dots')}>
                        <FiMoreHorizontal className={cx('actions-icon-dots')} />
                        <div className={cx('actions-delete')} onClick={handleDeleteComment}>
                            Delete
                        </div>
                    </div>
                    <div className={cx('actions-icon', isLikeCmt && 'active')} onClick={handleLikeCmt}>
                        <p>
                            <AiOutlineHeart className={cx('icons')} />
                        </p>
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
