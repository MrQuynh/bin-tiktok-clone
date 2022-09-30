import classNames from 'classnames/bind';
import styles from './Coin.module.scss';

const cx = classNames.bind(styles);
function Coin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper')}>hi</div>
        </div>
    );
}

export default Coin;
