import Image from '~/components/Image';
import images from './images';
import classNames from 'classnames/bind';
import styles from './LoadingIcon.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function LoadingIcon() {
    return (
        <Image
            className={cx('loading')}
            src="https://www.citypng.com/public/uploads/preview/loading-load-icon-transparent-png-11639609114lctjenyas8.png"
        />
    );
}

export default memo(LoadingIcon);
