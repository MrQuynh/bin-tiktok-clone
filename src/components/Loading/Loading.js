import React from 'react';
import ReactLoading from 'react-loading';

import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Loading = () => (
    <div className={cx('wrapper')}>
        <ReactLoading type="bars" color="white" />
    </div>
);

export default Loading;
