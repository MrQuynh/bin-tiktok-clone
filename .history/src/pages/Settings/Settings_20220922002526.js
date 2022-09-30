import classNames from 'classnames/bind';
import { createBrowserHistory } from 'history';
import { BiArrowBack } from 'react-icons/bi';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('back-icon')} onClick={goBack}>
                        <BiArrowBack />
                    </div>
                </div>
                <div className={cx('right')}></div>
            </div>
        </div>
    );
}

export default Settings;
