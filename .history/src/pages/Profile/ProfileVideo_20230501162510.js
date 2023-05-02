import classNames from 'classnames/bind';
import styles from './ProfileVideo.module.scss';

import { BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useStore } from '~/hooks';
import { actions } from '~/store';

const cx = classNames.bind(styles);

function ProfileVideo({ video }) {
    const mouseOver = (e) => {
        e.target.play();
        e.target.volume = 0;
    };
    const mouseOut = (e) => {
        e.target.pause();
    };
    const [state, dispatch] = useStore();
    const handleClickVideo = () => {
        dispatch(actions.setCurrentUserRedux(video.user_id));
        dispatch(actions.setTypeStatusRedux('PROFILE'));
    };

    return (
        <div className={cx('item-wrapper')}>
            <div className={cx('item-video-body')}>
                <Link
                    to={{
                        pathname: '/@' + video.user.nickname + '/watching',
                        search: 'id=' + video.id,
                    }}
                    onClick={handleClickVideo}
                >
                    {video.file_url && (
                        <video className={cx('item-video')} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            <source src={video.file_url} />
                        </video>
                    )}
                </Link>
                <div className={cx('item-viewers')}>
                    <BsPlayFill className={cx('item-play-icon')} />
                    <p>{video.views_count}</p>
                </div>
            </div>
            <div className={cx('item-video-content')}>{video.description}</div>
        </div>
    );
}

export default ProfileVideo;
