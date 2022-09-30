import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './MessageUser.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function MessageUser({ dataUser, isUser, text }) {
    return (
        <div className={cx('wrapper', isUser && 'wrapper-user')}>
            <div className={cx('body', isUser && 'body-user')}>
                <Image src={dataUser.avatar} className={cx('avatar')} />

                <span className={cx('text', isUser && 'text-user')}>{text}</span>
            </div>
        </div>
    );
}

export default memo(MessageUser);
