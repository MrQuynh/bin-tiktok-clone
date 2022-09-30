import classNames from 'classnames/bind';
import { BsPeople } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Live.module.scss';
import LiveVideoItem from './LiveVideoItem';

import Data from '~/FakeData/Data';
const cx = classNames.bind(styles);
const avatar =
    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c4d3eb485e49e9953b6594c08bf90b56~c5_100x100.jpeg?x-expires=1660957200&x-signature=vsv%2B3xc1tdrgUdOyOsrJNol2zpY%3D';
const linkvideo =
    'https://v16-webapp.tiktok.com/f5a8039056e629f66516027f77e66ad1/62ffca94/video/tos/useast2a/tos-useast2a-pve-0037-aiso/c66e8b72620344c1a63313c672123f6d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2402&bt=1201&cs=0&ds=3&ft=TkXt216WvjVQ9z0ELSTsdHcw4i_a7uwQAT1B8_cya9&mime_type=video_mp4&qs=0&rc=N2c7NThlNDRlODQ6OmdnaUBpam5pNTs6Zng1ZDMzZjgzM0AzY2I2YTU2NTExYzEzNV9hYSNmMF5pcjRvYWFgLS1kL2Nzcw%3D%3D&l=20220819112945010251003165080D9722&btag=80000';
function Live() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-info')}>
                    <div className={cx('info-body')}>
                        <Image src={avatar} className={cx('header-avatar')} />
                        <div className={cx('body-name')}>
                            <div className={cx('info')}>
                                <Link to="#" className={cx('nickname')}>
                                    imanhxinh.03
                                </Link>
                                <p className={cx('name')}>🍓canmotminh</p>
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('content-text')}>di hoc qua chan</span>
                                <div className={cx('viewer')}>
                                    <BsPeople className={cx('icon')} />
                                    <span className={cx('people-counter')}>8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('actions-icon')}>
                            <FaShare className={cx('actions-icons')} />
                            {/* <BoxShare className={cx('box-share')} /> */}
                        </div>
                        <FiMoreHorizontal className={cx('actions-icon')} />
                        <Button primary className={cx('btn-follow')}>
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx('header-video')}>
                    <video className={cx('video')} controls>
                        <source src={linkvideo} />
                    </video>
                    <div className={cx('live-label')}>LIVE</div>
                </div>
            </div>
            <div className={cx('live-inner')}>
                <div className={cx('title-recommend')}>Recommended LIVE videos</div>
                <div className={cx('video-rec-list')}>
                    {Data.map((data) => (
                        <LiveVideoItem key={data.id} {...data} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Live;
