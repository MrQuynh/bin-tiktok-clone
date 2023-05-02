import React from 'react';
import ReactLoading from 'react-loading';

import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Loading2 = () => (
    <div className={cx('wrapper2')}>
        <ReactLoading type="spinningBubbles" color="red" />
    </div>
);

export default Loading2;
