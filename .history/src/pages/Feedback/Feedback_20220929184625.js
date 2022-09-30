import classNames from 'classnames/bind';
import { AiFillCaretDown } from 'react-icons/ai';
import { FcNext } from 'react-icons/fc';
import styles from './Feedback.module.scss';

const cx = classNames.bind(styles);
function Feedback() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('title-header')}>Feedback and help</div>
                <div className={cx('select-title')}>SELECT A TOPIC</div>

                <div className={cx('content')}>
                    <div className={cx('left')}>
                        <h3 className={cx('suggest')}>Suggestion</h3>
                        <div className={cx('topic')}>
                            My Account & Settings <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            Creator tools <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            Feed/Search/Share/Embed <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            {' '}
                            Video and Sound
                            <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            {' '}
                            Follow/Like/Comment
                            <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            Notifications/messages <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            LIVE <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            Abuse Report <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            {' '}
                            TikTok Balance
                            <FcNext className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}> Not Responding/Lagging/Other</div>
                    </div>
                    <div className={cx('right')}>
                        <h1>FREQUENTLY ASKED QUESTIONS</h1>
                        <div className={cx('topic')}>
                            How to log in <AiFillCaretDown className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            This phone number is already registered <AiFillCaretDown className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            Why couldn't I complete the payment? <AiFillCaretDown className={cx('icon-more')} />
                        </div>
                        <div className={cx('topic')}>
                            Why didn't I receive my coins after making a payment?{' '}
                            <AiFillCaretDown className={cx('icon-more')} />
                        </div>
                    </div>
                </div>
                <div>Feedback History</div>
            </div>
        </div>
    );
}

export default Feedback;
