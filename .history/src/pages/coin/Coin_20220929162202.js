import classNames from 'classnames/bind';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import Image from '~/components/Image';
import styles from './Coin.module.scss';

const cx = classNames.bind(styles);
function Coin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('section')}>
                    <div className={cx('get-coin')}>
                        <p>Get coins</p>
                        <span>View transactions</span>
                    </div>
                    <div className={cx('section-info')}>
                        <div>
                            <Image src="" />
                            <div>
                                <p>Jujo_bin</p>
                                <div>
                                    <BsCoin />
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>
                                From LIVE gifts: $0.00 (<BsCoin />
                                10 )
                            </span>
                            <p>Exchange earnings for Coins</p>
                        </div>
                    </div>
                </div>
                <div>
                    Buy coins: <p>Save up to 24% compared to in-app purchase</p>
                    <AiOutlineInfoCircle />
                </div>
                <div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            70
                        </p>
                        <span>19,100 đ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coin;
