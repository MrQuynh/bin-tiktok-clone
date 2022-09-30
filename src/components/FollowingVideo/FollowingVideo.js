import classNames from 'classnames/bind';
import FollowingItem from './FollowingItem';
import styles from './FollowingVideo.module.scss';

const cx = classNames.bind(styles);

function FollowingVideo({ accountList, lastVideoRef }) {
    return (
        <div className={cx('wrapper-following')}>
            {accountList.map((account, index) => {
                if (accountList.length === index + 1) {
                    return (
                        <div ref={lastVideoRef} key={index}>
                            <FollowingItem key={account.id} data={account} />
                        </div>
                    );
                } else {
                    return <FollowingItem key={index} data={account} />;
                }
            })}
        </div>
    );
}

export default FollowingVideo;
