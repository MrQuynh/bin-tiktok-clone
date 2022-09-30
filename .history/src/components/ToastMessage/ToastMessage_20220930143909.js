import classNames from 'classnames/bind';
import styles from './ToastMessage.module.scss';

const cx = classNames.bind(styles);
function ToastMessage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('text')}>
                    Loading...
                    <div className={cx('line')}></div>
                </div>
            </div>
        </div>
    );
}

export default ToastMessage;
