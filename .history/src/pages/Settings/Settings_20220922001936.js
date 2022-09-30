import classNames from 'classnames/bind';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    {/* <div className={cx('back-icon')} onClick={goBack}>
                        <BiArrowBack />
                    </div> */}
                </div>
                <div className={cx('right')}></div>
            </div>
        </div>
    );
}

export default Settings;
