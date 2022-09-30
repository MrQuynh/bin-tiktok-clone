import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';

const cx = classNames.bind(styles);
function Feedback() {
    return (
        <div className={cx('wrapper')}>
            <div></div>
        </div>
    );
}

export default Feedback;
