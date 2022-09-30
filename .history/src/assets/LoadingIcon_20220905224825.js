import Image from '~/components/Image';
import images from './images';
import classNames from 'classnames/bind';
import styles from './LoadingIcon.module.scss';

const cx = classNames.bind(styles);

function LoadingIcon() {
    return <Image className={cx('loading')} src={images.loading} />;
}

export default LoadingIcon;
