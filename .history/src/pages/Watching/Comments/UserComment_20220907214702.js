import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineHeart, AiOutlineUp } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './UserComment.module.scss';
import UserCommentMore from './UserCommentMore';

const cx = classNames.bind(styles);
const avatar =
    'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1966fcda97fb1bc61ca3625ac98a5714~c5_100x100.jpeg?x-expires=1661223600&x-signature=BJWqsMUWTVfUKM2Ab36Tzt3bN14%3D';

const nickNameCmt = 'quynhnv2300';
const commentCmt = 'khi co dua ban la dai ca';
const timeCmt = 5;
const likeCommentCmt = 345;
function UserComment() {
    const [showCmt, setShowCmt] = useState('hidden');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <Link to="/">
                    <Image src={avatar} className={cx('avatar')} />
                </Link>
                <div className={cx('body')}>
                    <Link to="/">
                        <p className={cx('nickname')}>{nickNameCmt}</p>
                    </Link>
                    <p className={cx('comment')}>{commentCmt}</p>

                    <div className={cx('time')}>
                        <span>{timeCmt}d ago</span>
                        <span>Reply</span>
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
                            View more replies (5) <AiOutlineDown className={cx('more-comments-icon')} />
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

export default UserComment;
