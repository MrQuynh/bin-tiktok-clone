import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const [state, dispatch] = useStore();

    const classes = cx('menu-item', {
        separate: data.separate,
    });
    let link = data.to;
    let handleClick = onClick;
    if (data.title === 'View profile') {
        link = '/@' + JSON.parse(localStorage.getItem('USER_LOG_IN')).nickname;
    }
    if (data.title === 'Log out') {
        link = '/';
        handleClick = () => {
            localStorage.clear();
            window.location.reload();
        };
    }
    if (data.type === 'language') {
        handleClick = (data) => {
            dispatch(actions.setLanguage(data.code));
            localStorage.setItem('LANGUAGE', JSON.stringify(data.code));
        };
    }

    return (
        <Button className={classes} leftIcon={data.icon} to={link} onClick={() => handleClick(data)}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
