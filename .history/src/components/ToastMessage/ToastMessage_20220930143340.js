import classNames from 'classnames/bind';
import styles from './ToastMessage.module.scss';

const cx = classNames.bind(styles);
function ToastMessage() {
    return <div className={cx('wrapper')}>toast mess</div>;
}

export default ToastMessage;
