import classNames from 'classnames/bind';

import { AiOutlineClose, AiTwotoneHeart } from 'react-icons/ai';
import {
    BsCheckSquare,
    BsChevronDown,
    BsEmojiSmile,
    BsFacebook,
    BsFillPlayFill,
    BsFlag,
    BsLink45Deg,
    BsMusicNoteBeamed,
    BsWhatsapp,
} from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { ImEmbed } from 'react-icons/im';
import Button from '~/components/Button';
import Image from '~/components/Image';
import UserComment from './Comments/UserComment';
import styles from './Watching.module.scss';

import { Link, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useEffect, useRef, useState } from 'react';
import * as anUserService from '~/services/userService';
import * as userService from '~/services/userService';
import { ModalSettings } from '~/components/ModalEdit';

const cx = classNames.bind(styles);

function Watching() {
    const match = useLocation();
    const query = new URLSearchParams(match.search);
    const nick = '/' + match.pathname.split('/')[1];
    const idVideo = query.get('id');

    const [data, setData] = useState([]);
    const [linkVideo, setLinkVideo] = useState('');

    const handleChangeVideo = () => {};
    useEffect(() => {
        anUserService
            .getAnUser(nick)
            .then((data) => {
                if (data === undefined) {
                    return;
                }
                setData(data);
                data.is_followed ? setIsFollow(true) : setIsFollow(false);
                setLinkVideo(data.videos.find((video) => video.id === +idVideo));
            })
            .catch((error) => console.log(error));
    }, [idVideo, nick]);

    const [play, setPlay] = useState(false);
    const videoRef = useRef();

    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };

    const handlePlay = () => {
        setPlay(!play);
        play ? videoRef.current.play() : videoRef.current.pause();
    };
    const [count, setCount] = useState(0);
    // check user
    const [isLogin, setIsLogIn] = useState(null);
    const [isFollow, setIsFollow] = useState(null);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('USER_LOG_IN'))?.nickname === data.nickname) {
            setIsLogIn('author');
        }
    }, [data.nickname]);
    const handleUnFollow = () => {
        userService.postUnFollow(data.id);
        setIsFollow(false);
    };
    const handleFollow = () => {
        userService.postFollow(data.id);
        setIsFollow(true);
    };
    // handle delete
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const handleDelete = () => {
        setModal(true);
        setTitle('delete');
    };
    const handleSettings = () => {
        setModal(true);
        setTitle('settings');
    };
    // footer
    const [value, setValue] = useState('');
    const [hasValue, setHasValue] = useState(false);
    const handleOnInput = (e) => {
        setValue(e.target.value);
        value && setHasValue(true);
    };
    const handleOnBlur = () => {
        value ? setHasValue(true) : setHasValue(false);
    };

    return (
        <div className={cx('wrapper')}>
            {modal && <ModalSettings title={title} setModal={setModal} idVideo={linkVideo.id} />}
            <div className={cx('body-video')} onClick={() => setCount(count + 1)}>
                <div>
                    {linkVideo && (
                        <video className={cx('video')} ref={videoRef} loop autoPlay controls>
                            <source src={linkVideo.file_url} />
                        </video>
                    )}
                </div>

                <div className={cx('icon-body', 'close')} onClick={goBack}>
                    <AiOutlineClose className={cx('icon')} />
                </div>
                <div className={cx('icon-body', 'report')}>
                    <BsFlag className={cx('icon')} /> Report
                </div>
                <div className={cx('icon-body', 'down')}>
                    <BsChevronDown className={cx('icon')} onClick={handleChangeVideo} />
                </div>
                {/* on mobile */}
                <div className={cx('cmt-on-mobile')} onClick={handlePlay}>
                    <div className={cx('icon-body', 'close')} onClick={goBack}>
                        <AiOutlineClose className={cx('icon')} />
                    </div>
                    <div className={cx('icon-body', 'report')}>
                        <BsFlag className={cx('icon')} /> Report
                    </div>
                    <div className={cx('m-info')}>
                        <p className={cx('m-name')}> {data.nickname}</p>
                        <div className={cx('m-content')}>
                            {linkVideo.description}
                            <div className={cx('m-tag')}>
                                <Link to="#" className={cx('m-tag-link')}>
                                    #xuhuong
                                </Link>
                                <Link to="#" className={cx('m-tag-link')}>
                                    #gaixinh
                                </Link>
                            </div>
                            <div className={cx('m-tag')}>
                                <Link to="#" className={cx('m-tag-link')}>
                                    #xuhuong
                                </Link>
                                <Link to="#" className={cx('m-tag-link')}>
                                    #gaixinh
                                </Link>
                            </div>
                        </div>
                        <Link to="#" className={cx('m-music')}>
                            <BsMusicNoteBeamed /> {linkVideo.music}
                        </Link>
                    </div>
                    <div className={cx('m-action')}>
                        <Image src={data.avatar} className={cx('m-avatar')} />
                        <div className={cx('m-like')}>
                            <div className={cx('m-like-body')}>
                                <AiTwotoneHeart className={cx('m-like-icon')} />
                            </div>
                            <span className={cx('m-like-count')}>{linkVideo.likes_count}</span>
                            <div className={cx('m-like-body')}>
                                <FaCommentDots className={cx('m-like-icon')} />
                            </div>
                            <span className={cx('m-like-count')}> {linkVideo.comments_count}</span>
                        </div>

                        <Image src={data.avatar} className={cx('m-avatar')} />
                    </div>
                    {play && <BsFillPlayFill className={cx('m-play')} />}
                </div>
            </div>

            <div className={cx('author')}>
                <div className={cx('info')}>
                    <div className={cx('info-header')}>
                        <Link
                            to={{
                                pathname: '/@' + data.nickname,
                            }}
                            className={cx('header-info-body')}
                        >
                            <Image src={data.avatar} className={cx('avatar')} />
                            <div className={cx('info-wrapper')}>
                                <p className={cx('nickname')}>{data.nickname}</p>
                                <p className={cx('name')}>
                                    {`${data.first_name} ${data.last_name}`}{' '}
                                    <BsCheckSquare className={cx('icon-check')} /> - 1d ago
                                </p>
                            </div>
                        </Link>

                        {isLogin === 'author' ? (
                            <div className={cx('more-login')}>
                                <FiMoreHorizontal className={cx('actions-more-icon')} />

                                <div className={cx('more-list')}>
                                    <div className={cx('more-item')} onClick={handleSettings}>
                                        Privacy settings
                                    </div>
                                    <div className={cx('more-item')} onClick={handleDelete}>
                                        Delete
                                    </div>
                                </div>
                            </div>
                        ) : !isFollow ? (
                            <Button outline large className={cx('btn')} onClick={handleFollow}>
                                Follow
                            </Button>
                        ) : (
                            <Button outline large className={cx('btn', 'btn-following')} onClick={handleUnFollow}>
                                Following
                            </Button>
                        )}
                    </div>

                    <div className={cx('content')}>
                        {linkVideo.description}
                        <Link to="#" className={cx('tag-link')}>
                            #xuhuong
                        </Link>
                        <Link to="#" className={cx('tag-link')}>
                            #gaixinh
                        </Link>
                    </div>

                    <Link to="#" className={cx('music')}>
                        <BsMusicNoteBeamed />
                        music
                    </Link>

                    <div className={cx('action')}>
                        <div className={cx('like')}>
                            <div className={cx('like-body')}>
                                <AiTwotoneHeart className={cx('like-icon')} />
                            </div>
                            <span className={cx('like-count')}>{linkVideo.likes_count}</span>
                            <div className={cx('like-body')}>
                                <FaCommentDots className={cx('like-icon')} />
                            </div>
                            <span className={cx('like-count')}> {linkVideo.comments_count}</span>
                        </div>
                        <div className={cx('share')}>
                            <Link to="#" className={cx('share-item')}>
                                <ImEmbed className={cx('share-icon')} />
                                <span>Embed</span>
                            </Link>
                            <Link to="#" className={cx('share-item')}>
                                <FiSend className={cx('share-icon')} />
                                <span>Send to friends</span>
                            </Link>
                            <Link to="#" className={cx('share-item')}>
                                <BsFacebook className={cx('share-icon')} />
                                <span>Share to Facebook</span>
                            </Link>
                            <Link to="/share-whatsapp" className={cx('share-item')}>
                                <BsWhatsapp className={cx('share-icon')} />
                                <span>Share to WhatsApp</span>
                            </Link>
                            <Link to="#" className={cx('share-item')}>
                                <BsLink45Deg className={cx('share-icon')} />
                                <span>Copy link</span>
                            </Link>
                        </div>
                    </div>

                    <div className={cx('share-link')}>
                        <div>https://www.tiktok.com/@{data.nickname}/video/71334295915191</div>
                        <Button outline small className={cx('share-link-btn')}>
                            Copy link
                        </Button>
                    </div>
                </div>
                <div className={cx('comments')}>
                    <UserComment />
                    <UserComment />
                    <UserComment />
                </div>
                <footer className={cx('footer')}>
                    {isLogin ? (
                        <div className={cx('footer-text')}>Please log in to comment</div>
                    ) : (
                        <div className={cx('chat-box-bottom')}>
                            <div className={cx('chat-box-bottom-body')}>
                                <input
                                    type="text"
                                    value={value}
                                    onChange={handleOnInput}
                                    onBlur={handleOnBlur}
                                    className={cx('chat-box-input')}
                                    placeholder="Add comment....."
                                />
                                <div className={cx('emotion-body')}>
                                    <BsEmojiSmile className={cx('chat-box-emotion')} />
                                    <div className={cx('emotion-hover')}>Click to add emojis</div>
                                </div>
                            </div>
                            {/* {sendBtn && ( */}
                            <div className={cx('send-btn', hasValue && 'active-value')}>Post</div>
                            {/* )} */}
                        </div>
                    )}
                </footer>
            </div>
        </div>
    );
}

export default Watching;
