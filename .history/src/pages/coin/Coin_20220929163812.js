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
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a69cec21a570bec51ca77996ca65bcb8~c5_100x100.jpeg?x-expires=1664614800&x-signature=G5tP0s0IK%2BnsclfAaprZMTBqlqs%3D"
                                className={cx('image')}
                            />
                            <div>
                                <p className={cx('nickname')}>Jujo_bin</p>
                                <div className={cx('your-coin')}>
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
