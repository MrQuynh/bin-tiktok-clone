import classNames from 'classnames/bind';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { FcNext } from 'react-icons/fc';
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
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a69cec21a570bec51ca77996ca65bcb8~c5_100x100.jpeg?x-expires=1664614800&x-signature=G5tP0s0IK%2BnsclfAaprZMTBqlqs%3D"
                                className={cx('image')}
                            />
                            <div>
                                <p className={cx('nickname')}>Jujo_bin</p>
                                <div className={cx('your-coin')}>
                                    <BsCoin className={cx('your-coin-icon')} />
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('space')}></div>
                        <div className={cx('exchange-coin')}>
                            <span className={cx('exchange')}>
                                From LIVE gifts: $0.00 (<BsCoin className={cx('coin-icon small')} />
                                10 )
                            </span>
                            <p>
                                Exchange earnings for Coins <FcNext style={{ 'margin-left': '4px' }} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('buy-coin')}>
                    Buy coins: <p>Save up to 24% compared to in-app purchase</p>
                    <AiOutlineInfoCircle className={cx('icon-info')} />
                </div>
                <div className={cx('price-coin')}>
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
                            10
                        </p>
                        <span>50,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            50
                        </p>
                        <span>120,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            70
                        </p>
                        <span>300,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            100
                        </p>
                        <span>700,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            150
                        </p>
                        <span>900,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            300
                        </p>
                        <span>1,000,100 đ</span>
                    </div>
                    <div className={cx('price')}>
                        <p>
                            <BsCoin className={cx('icon-price')} />
                            500
                        </p>
                        <span>2,300,100 đ</span>
                    </div>
                </div>
                <div className={cx('payment')}>Payment method :</div>
                <div className={cx('total')}>
                    Total :<strong> 690</strong>đ
                </div>
                <Button large>Buy now</Button>
            </div>
        </div>
    );
}

export default Coin;
