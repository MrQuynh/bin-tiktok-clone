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
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const VideoInfo = ({ data }) => {
    const [login, setLogin] = useState(false);

    const [follow, setFollow] = useState(data.user.is_followed);
    const HandleLogin = () => {
        if (localStorage.getItem('USER_LOG_IN')) {
            setFollow(!follow);
            if (!follow) {
                userService.postFollow(data.user.id);
            } else {
                userService.postUnFollow(data.user.id);
            }
        } else {
            setLogin(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {login ? <ModalOverlay setLogin={setLogin} /> : ''}

            <div className={cx('info')}>
                <Link
                    to={{
                        pathname: '/@' + data.user.nickname,
                    }}
                    className={cx('avatar-div')}
                >
                    <Image className={cx('avatar')} src={data.user.avatar} alt="avatar" />
                </Link>

                <div className={cx('info-body')}>
                    <div className={cx('name-out')}>
                        <Link
                            to={{
                                pathname: '/@' + data.user.nickname,
                            }}
                            className={cx('name')}
                        >
                            {data.user.nickname}
                        </Link>
                        <Link
                            to={{
                                pathname: '/@' + data.user.nickname,
                            }}
                            className={cx('nickname')}
                        >
                            {`${data.user.first_name} ${data.user.last_name}`}
                        </Link>
                        {/* follow user */}
                        <div className={cx('follow-account')}>
                            <FollowAccount
                                name={data.user.name}
                                avatar={data.user.avatar}
                                nickName={data.user.nickname}
                                followers={data.user.followers_count}
                                like={data.user.likes_count}
                                id={data.user.id}
                                is_followed={data.user.is_followed}
                            />
                        </div>
                        {/* follow user */}
                    </div>
                    <div className={cx('content-text')}>{data.description}</div>
                    {data.music && (
                        <Link to="#" className={cx('name-music')}>
                            <FaMusic className={cx('music-icon')} />
                            {data.music}
                        </Link>
                    )}

                    {/* video */}
                    <VideoContent
                        like={data.likes_count}
                        nickName={data.user.nickname}
                        idUser={data.user.id}
                        id={data.id}
                        video={data.file_url}
                        is_liked={data.is_liked}
                        comment={data.comments_count}
                        follow={data.user.is_followed}
                        setLogin={setLogin}
                    />
                </div>
            </div>
            <div>
                {follow ? (
                    <Button outline small className={cx('btn', 'follow-btn')} onClick={HandleLogin}>
                        <FormattedMessage id="home.following" />
                    </Button>
                ) : (
                    <Button outline small className={cx('btn')} onClick={HandleLogin}>
                        <FormattedMessage id="home.follow" />
                    </Button>
                )}
            </div>
        </div>
    );
};
// ,
const VideoContent = ({ video, like, nickName, id, setLogin, comment, share, is_liked }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [heart, setHeart] = useState(is_liked);
    const videoRef = useRef();
    const [likes, setLikes] = useState(like);
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
        threshold: 0.7,
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
        if (localStorage.getItem('USER_LOG_IN')) {
            if (heart) {
                setLikes(likes - 1);
                setHeart(false);
                userService.postUnLikedPost({ id });
            } else {
                userService.postLikedPost({ id });
                setHeart(true);
                setLikes(likes + 1);
            }
            setHeart(!heart);
        } else {
            setLogin(true);
        }
    };
    const handleComment = (e) => {
        if (!localStorage.getItem('USER_LOG_IN')) {
            e.preventDefault();
            setLogin(true);
        }
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
                    <p className={cx('vote')}>{likes || 0}</p>
                </div>
                <Link
                    to={{
                        pathname: '/@' + nickName + '/watching',
                        search: 'id=' + id,
                    }}
                >
                    <div className={cx('action-item')}>
                        <BsFillChatDotsFill className={cx('action-icon')} onClick={handleComment} />{' '}
                        <p className={cx('vote')}>{comment || 0}</p>
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
export default Video;
