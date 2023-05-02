import classNames from 'classnames/bind';
import { AiOutlineDown, AiOutlineHeart, AiOutlineUp } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import Image from '~/components/Image';
import styles from './UserCommentMore.module.scss';

const cx = classNames.bind(styles);
const avatar = 'https://i.pinimg.com/736x/2e/89/01/2e89015d3ed5b94e903ad8acb62a0c25.jpg';

const nickName = 'Mr.Quynh';
const comment = 'More comments';
const time = 5;
const likeComment = 345;

function UserCommentMore() {
    return (
        <div>
            <div className={cx('info')}>
                <Image src={avatar} className={cx('avatar')} />
                <div className={cx('body')}>
                    <p className={cx('nickname')}>{nickName}</p>
                    <p className={cx('comment')}>{comment}</p>

                    <div className={cx('time')}>
                        <span>{time}d ago</span>
                        <span>Reply</span>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <FiMoreHorizontal className={cx('actions-icon')} />
                    <div className={cx('actions-icon')}>
                        <AiOutlineHeart className={cx('icons')} />
                        <span>{likeComment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCommentMore;
