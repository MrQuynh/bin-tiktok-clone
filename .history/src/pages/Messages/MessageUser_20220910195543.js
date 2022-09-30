import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './MessageUser.module.scss';

const cx = classNames.bind(styles);

function MessageUser({ dataUser }) {
    console.log(dataUser);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body', 'body-user')}>
                <Image src={dataUser.avatar} className={cx('avatar')} />

                <span className={cx('text', 'body-text')}>
                    Hello everyone, how are you today?Hello everyone, how are you today?Hello everyone, how are you
                    today?Hello everyone, how are you today?
                </span>
            </div>
        </div>
    );
}

export default MessageUser;
