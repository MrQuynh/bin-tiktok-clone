import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FaMusic, FaHeart, FaShare } from 'react-icons/fa';
import { BsFillChatDotsFill, BsPlayFill, BsPauseFill } from 'react-icons/bs';

import Button from '../Button';

import Image from '../Image';
import styles from './Video.module.scss';
import { useRef, useState, useEffect, memo } from 'react';
import { useElementOnScreen } from '~/hooks';
import FollowAccount from '../FollowAccount/FollowAccount';
import BoxShare from '../BoxShare';

import ModalOverlay from '../ModalOverlay';
import Volume from '../Volume';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

const VideoInfo = ({ data }) => {
    const [login, setLogin] = useState(false);

    const [follow, setFollow] = useState(data.is_followed);
    const HandleLogin = () => {
        if (localStorage.getItem('USER_LOG_IN')) {
            setFollow(!follow);
            if (!follow) {
                userService.postFollow(data.id);
            } else {
                userService.postUnFollow(data.id);
            }
        } else {
            setLogin(true);
        }
    };
    console.log(data);

    return (
        <div className={cx('wrapper')}>
            {login ? <ModalOverlay setLogin={setLogin} /> : ''}

            <div className={cx('info')}>
                <Link
                    to={{
                        pathname: '/@' + data.nickname,
                    }}
                    className={cx('avatar-div')}
                >
                    <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
                </Link>

                <div className={cx('info-body')}>
                    <div className={cx('name-out')}>
                        <Link
                            to={{
                                pathname: '/@' + data.nickname,
                            }}
                            className={cx('name')}
                        >
                            {data.nickname}
                        </Link>
                        <Link
                            to={{
                                pathname: '/@' + data.nickname,
                            }}
                            className={cx('nickname')}
                        >
                            {`${data.first_name} ${data.last_name}`}
                        </Link>
                        {/* follow user */}
                        <div className={cx('follow-account')}>
                            <FollowAccount
                                name={data.name}
                                avatar={data.avatar}
                                nickName={data.nickname}
                                followers={data.followers_count}
                                like={data.likes_count}
                                id={data.id}
                            />
                        </div>
                        {/* follow user */}
                    </div>
                    <div className={cx('content-text')}>{data.popular_video.description}</div>
                    {data.music && (
                        <Link to="#" className={cx('name-music')}>
                            <FaMusic className={cx('music-icon')} />
                            {data.music}
                        </Link>
                    )}

                    {/* video */}
                    <VideoContent
                        like={data.like_count}
                        nickName={data.nickname}
                        idUser={data.id}
                        id={data.popular_video.id}
                        video={data.popular_video.file_url}
                        is_liked={data.popular_video.is_liked}
                    />
                </div>
            </div>
            <div>
                {follow ? (
                    <Button outline small className={cx('btn', 'follow-btn')} onClick={HandleLogin}>
                        Following
                    </Button>
                ) : (
                    <Button outline small className={cx('btn')} onClick={HandleLogin}>
                        Follow
                    </Button>
                )}
            </div>
        </div>
    );
};
// ,
const VideoContent = ({ video, like, idUser, nickName, id, comments, share, is_liked }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [heart, setHeart] = useState(is_liked);
    const videoRef = useRef();

    const handleClick = () => {
        if (!isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    // auto play
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
    };
    const isVisible = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisible) {
            if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        } else {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [isVisible]);
    // heart
    const handleHeart = () => {
        if (heart) {
            setHeart(false);
            userService.postUnLikedPost({ id });
        } else {
            userService.postLikedPost({ id });
            setHeart(true);
        }
        setHeart(!heart);
    };

    return (
        <div className={cx('body')}>
            <div className={cx('body-video')}>
                <Link
                    to={{
                        pathname: '/@' + nickName + '/watching',
                        search: 'id=' + id,
                    }}
                >
                    <video className={cx('video')} ref={videoRef} loop>
                        <source src={video} />
                    </video>
                </Link>
                <BsPlayFill className={cx('pause', isPlaying ? '' : 'play')} onClick={handleClick} />
                <BsPauseFill className={cx('pause', isPlaying ? 'play' : '')} onClick={handleClick} />

                {/* volume */}
                <div className={cx('pause-body')}>
                    <Volume videoRef={videoRef} />
                </div>
            </div>
            <div className={cx('actions')}>
                <div className={cx('action-item')}>
                    {/* , 'active' */}
                    <FaHeart className={cx('action-icon', heart && 'active')} onClick={handleHeart} />
                    <p className={cx('vote')}>{like || 0}</p>
                </div>
                <Link
                    to={{
                        pathname: '/@' + nickName + '/watching',
                        search: 'id=' + id,
                    }}
                >
                    <div className={cx('action-item')}>
                        <BsFillChatDotsFill className={cx('action-icon')} />{' '}
                        <p className={cx('vote')}>{comments || 0}</p>
                    </div>
                </Link>
                <div className={cx('action-item')}>
                    <FaShare className={cx('action-icon')} />
                    <p className={cx('vote')}>{share || 0}</p>
                    <div className={cx('share-home')}>
                        <BoxShare />
                    </div>
                </div>
            </div>
        </div>
    );
};

function Video({ data }) {
    return (
        <div className={cx('video')}>
            <VideoInfo data={data} />
        </div>
    );
}

export default memo(Video);
