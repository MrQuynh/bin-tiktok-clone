import PropTypes from 'prop-types';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                src={data.avatar}
                className={cx('avatar')}
                alt={data.full_name}
                // fallback="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/248970884_1362577907478047_3266369477725568432_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=R7nPZBNcvs8AX-Wozt0&_nc_ht=scontent.fdad3-5.fna&oh=00_AT_-nySYliXWR0qtyVwIfeKdl2m6VhJyI0G_jcY8yWtKBg&oe=62E3C710"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
