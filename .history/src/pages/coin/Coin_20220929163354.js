import classNames from 'classnames/bind';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import Button from '~/components/Button';
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
                        <div className={cx('info-user')}>
                            <Image
                                href="https:/www.google.com/url?sa=i&url=https%3A%2F%2Fwww.24h.com.vn%2Flam-dep%2Fhot-girl-top-1-trending-lo-anh-ngoai-doi-chan-dai-noi-bat-nhung-dien-mao-khac-la-c145a1341583.html&psig=AOvVaw3hpQEKYJmETBu8L3BJnAZG&ust=1664530360452000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMC_kvrYufoCFQAAAAAdAAAAABAY"
                                className={cx('image')}
                            />
                            <div>
                                <p>Jujo_bin</p>
                                <div>
                                    <BsCoin />
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('')}>
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
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            70
                        </p>
                        <span>19,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            70
                        </p>
                        <span>19,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            70
                        </p>
                        <span>19,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            70
                        </p>
                        <span>19,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            70
                        </p>
                        <span>19,100 đ</span>
                    </div>
                </div>
                <div>Payment method</div>
                <div>Total: 0</div>
                <Button large>Buy now</Button>
            </div>
        </div>
    );
}

export default Coin;
