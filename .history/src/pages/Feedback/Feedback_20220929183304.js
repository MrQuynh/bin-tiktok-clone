import classNames from 'classnames/bind';
import { FcNext } from 'react-icons/fc';
import styles from './Feedback.module.scss';

const cx = classNames.bind(styles);
function Feedback() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <h1>Feedback and help</h1>
                <h3>SELECT A TOPIC</h3>
            </div>
            <div>
                <div>
                    <h3>Suggestion</h3>
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
                <div></div>
            </div>
        </div>
    );
}

export default Feedback;
