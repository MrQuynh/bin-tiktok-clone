import classNames from 'classnames/bind';
import { BsFacebook, BsLink45Deg, BsWhatsapp } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { ImEmbed } from 'react-icons/im';
import { Link } from 'react-router-dom';

import styles from './BoxShare.module.scss';
const cx = classNames.bind(styles);

function BoxShare() {
    return (
        <div className={cx('share')}>
            <Link to="#" className={cx('share-item')}>
                <ImEmbed className={cx('share-icon')} />
                <span>Embed</span>
            </Link>
            <Link to="#" className={cx('share-item')}>
                <FiSend className={cx('share-icon')} />
                <span>Send to friends</span>
            </Link>
            <Link to="#" className={cx('share-item')}>
                <BsFacebook className={cx('share-icon')} />
                <span>Share to Facebook</span>
            </Link>
            <Link to="/share-whatsapp" className={cx('share-item')}>
                <BsWhatsapp className={cx('share-icon')} />
                <span>Share to WhatsApp</span>
            </Link>
            <Link to="#" className={cx('share-item')}>
                <BsLink45Deg className={cx('share-icon')} />
                <span>Copy link</span>
            </Link>
        </div>
    );
}

export default BoxShare;
