import Video from '~/components/Video';
import classNames from 'classnames/bind';
import styles from './FollowingLogin.module.scss';

const cx = classNames.bind(styles);

function FollowingLogin({ followUserList, lastVideoRef }) {
    return (
        <div className={cx('body')}>
            {followUserList.map((account, index) => {
                if (followUserList.length === index + 1) {
                    console.log(account);
                    return (
                        <div key={account.id} ref={lastVideoRef}>
                            <Video data={account} />
                        </div>
                    );
                } else {
                    return <Video key={Math.random()} data={account} />;
                }
            })}
        </div>
    );
}

export default FollowingLogin;
