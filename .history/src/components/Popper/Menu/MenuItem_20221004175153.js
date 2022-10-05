import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    let link = data.to;
    let handleClick = onClick;
    if (data.title === 'View profile' || 'Xem hồ sơ') {
        link = '/@' + JSON.parse(localStorage.getItem('USER_LOG_IN'));
    }
    else (data.title === 'Log out' || 'Đăng xuất') {
        link = '/';
        handleClick = () => {
            localStorage.clear();
            window.location.reload();
        };
    }

    return (
        <Button className={classes} leftIcon={data.icon} to={link} onClick={handleClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
