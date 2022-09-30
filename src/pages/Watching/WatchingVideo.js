import classNames from 'classnames/bind';
import styles from './Watching.module.scss';

const cx = classNames.bind(styles);

function WatchingVideo({ linkVideo, videoRef }) {
    return (
        <div>
            <video className={cx('video')} ref={videoRef} controls>
                <source src={linkVideo} type="video/mp4" />
            </video>
        </div>
    );
}

export default WatchingVideo;
