import classNames from 'classnames/bind';
import styles from './Qrcode.module.scss';

import { AiOutlineScan, AiOutlineUserAdd } from 'react-icons/ai';
import Image from '~/components/Image';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function Qrcode() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <Image src={images.qr} alt="" className={cx('qr-image')} />
                <div className={cx('guide')}>
                    <p className={cx('guide-text')}>1. Open the TikTok app on your mobile device</p>
                    <p className={cx('guide-text')}>
                        2. On Profile, tap <AiOutlineUserAdd className={cx('guide-icon')} />{' '}
                    </p>
                    <p className={cx('guide-text')}>
                        3. Tap <AiOutlineScan className={cx('guide-icon')} /> and scan the QR code to confirm your login
                    </p>
                </div>
            </div>
            <div className={cx('item')}>
                <Image src={images.qrPhone} className={cx('phone-image')} />
            </div>
        </div>
    );
}

export default Qrcode;
