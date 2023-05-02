import classNames from 'classnames/bind';
import { AiOutlineDown, AiOutlineHeart, AiOutlineUp } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import Image from '~/components/Image';
import styles from './UserCommentMore.module.scss';

const cx = classNames.bind(styles);
const avatar =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F704883779179434250%2F&psig=AOvVaw1XLJYUKBPtJx7xRy_ugqrj&ust=1682012498992000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiPt_2-tv4CFQAAAAAdAAAAABAE';

const nickName = 'quynhnv2300';
const comment = 'khi co dua ban la dai ca';
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
