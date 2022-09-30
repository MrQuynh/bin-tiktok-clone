import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './MessageUser.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function MessageUser({ dataUser, isUser, text }) {
    console.log('test');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body', isUser && 'body-user')}>
                <Image src={dataUser.avatar} className={cx('avatar')} />

                <span className={cx('text', isUser && 'text-user')}>{text}</span>
            </div>
        </div>
    );
}

export default memo(MessageUser);
