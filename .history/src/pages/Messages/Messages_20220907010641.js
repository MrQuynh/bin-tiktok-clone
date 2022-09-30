import classNames from 'classnames/bind';
import { createBrowserHistory } from 'history';
import { useState } from 'react';
import { AiFillSetting, AiOutlineDelete } from 'react-icons/ai';
import { BiArrowBack, BiBlock } from 'react-icons/bi';
import { BsEmojiSmile, BsFlag, BsPinAngle } from 'react-icons/bs';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IoIosNotificationsOff } from 'react-icons/io';
import Image from '~/components/Image';
import { useStore } from '~/hooks';
import styles from './Messages.module.scss';

const cx = classNames.bind(styles);

function Messages() {
    const [value, setValue] = useState('');
    const [sendBtn, setSendBtn] = useState(false);
    const [state] = useStore();

    const handleOnInput = (e) => {
        setValue(e.target.value);
        if (value) {
            setSendBtn(true);
        }
    };
    const handleOnBlur = () => {
        if (value) {
            setSendBtn(true);
        } else {
            setSendBtn(false);
        }
    };
    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };

    const [isMore, setIsMore] = useState(false);
    const handleMore = (e) => {
        setIsMore(!isMore);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body-container')}>
                <div className={cx('conversation-list')}>
                    <div className={cx('back-icon')} onClick={goBack}>
                        <BiArrowBack />
                    </div>
                    <div className={cx('conversation-header')}>
                        <div className={cx('title')}>Messages</div>
                        <div className={cx('setting-icon')}>
                            <AiFillSetting className={cx('setting-icon')} />
                        </div>
                    </div>
                    <div className={cx('list-content')}>
                        {/* item */}
                        <div className={cx('item', 'active')}>
                            <div className={cx('item-info')}>
                                <Image src={state.currentUser.avatar} className={cx('item-info-avatar')} />
                                <div className={cx('item-info-text')}>
                                    <p
                                        className={cx('item-info-nickname')}
                                    >{`${state.currentUser.first_name} ${state.currentUser.last_name}`}</p>
                                    <p className={cx('item-info-time')}>
                                        9:50<span>PM</span>
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more')}>
                                <FiMoreHorizontal className={cx('more-icon')} onClick={handleMore} />
                                {isMore && (
                                    <div className={cx('more-list')}>
                                        <div className={cx('more-item')}>
                                            <IoIosNotificationsOff />
                                            <p>Mute</p>
                                        </div>
                                        <div className={cx('more-item')}>
                                            <AiOutlineDelete />
                                            <p>Delete</p>
                                        </div>
                                        <div className={cx('more-item')}>
                                            <BsPinAngle />
                                            <p>Pin to top</p>
                                        </div>
                                        <div className={cx('more-item')}>
                                            <BsFlag />
                                            <p>Report</p>
                                        </div>
                                        <div className={cx('more-item')}>
                                            <BiBlock />
                                            <p>Block</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('chat-box')}>
                    <div className={cx('chat-box-header')}>
                        <div className={cx('item', 'item-border')}>
                            <div className={cx('item-info')}>
                                <Image src={state.currentUser.avatar} className={cx('item-info-avatar')} />
                                <div className={cx('item-info-text')}>
                                    <p
                                        className={cx('item-info-nickname')}
                                    >{`${state.currentUser.first_name} ${state.currentUser.last_name}`}</p>
                                    <p className={cx('item-info-name')}>@{state.currentUser.nickname}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('chat-box-main')}></div>
                    <div className={cx('chat-box-bottom')}>
                        <div className={cx('chat-box-bottom-body')}>
                            <input
                                type="text"
                                value={value}
                                onChange={handleOnInput}
                                onBlur={handleOnBlur}
                                className={cx('chat-box-input')}
                                placeholder="Send a message..."
                            />
                            <div className={cx('emotion-body')}>
                                <BsEmojiSmile className={cx('chat-box-emotion')} />
                                <div className={cx('emotion-hover')}>Click to add emojis</div>
                            </div>
                        </div>
                        {sendBtn && (
                            <div className={cx('send-btn')}>
                                <FiSend className={cx('send-icon')} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;
