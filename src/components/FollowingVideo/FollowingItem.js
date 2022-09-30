import classNames from 'classnames/bind';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './FollowingVideo.module.scss';

const cx = classNames.bind(styles);

function FollowingItem({ data }) {
    const mouseOver = (e) => {
        e.target.play();
        e.target.volume = 0;
    };
    const mouseOut = (e) => {
        e.target.pause();
    };

    return (
        <Link
            to={{
                pathname: '/@' + data.nickname,
            }}
            className={cx('following-video-item')}
        >
            <div className={cx('item')}>
                <div className={cx('body-video')}>
                    <video className={cx('following-video')} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <source src={data.popular_video.file_url} />
                    </video>
                </div>

                <div className={cx('following-info')}>
                    <div className={cx('info')}>
                        <p>{`${data.first_name} ${data.last_name}`}</p>
                        <p className={cx('nickname')}>
                            {data.nickname} {data.tick && <AiFillCheckCircle className={cx('icon')} />}
                        </p>
                    </div>
                    <Button primary className={cx('following-btn')}>
                        Following
                    </Button>
                </div>
            </div>
        </Link>
    );
}

export default FollowingItem;
