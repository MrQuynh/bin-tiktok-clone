import classNames from 'classnames/bind';
import FollowingVideo from '~/components/FollowingVideo';
import styles from './Following.module.scss';

import * as userService from '~/services/userService';
import { useCallback, useEffect, useRef, useState } from 'react';
import LoadingIcon from '~/assets/LoadingIcon';
import FollowingLogin from './FollowingLogin';

const INIT_PAGE = 1;
const PER_PAGE = 5;

const cx = classNames.bind(styles);

function Following() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [followUser, setFollowUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [more, setMore] = useState(false);

    const observer = useRef();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // if (localStorage.getItem('USER_LOG_IN')) {
        //     // when login
        //     userService
        //         .getFollowing({ page: page })
        //         .then((data1) => {
        //             setFollowUser([...data1]);
        //             setLoading(false);
        //         })
        //         .catch((error) => console.log(error));
        // } else {
        //  when logout
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prev) => [...prev, ...data]);
                setMore(data.length > 0);
                setLoading(false);
            })
            .catch((error) => console.log(error));
        // }
    }, [page]);
    // console.log(followUser);

    const lastRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, []);

    return loading ? (
        <div className={cx('loading')}>
            <LoadingIcon />
        </div>
    ) : (
        // localStorage.getItem('USER_LOG_IN') ? (
        //     // <FollowingLogin followUserList={followUser} lastVideoRef={lastRef} />
        //     <FollowingVideo accountList={suggestedUser} lastVideoRef={lastRef} />
        // ) :
        <FollowingVideo accountList={suggestedUser} lastVideoRef={lastRef} />
    );
}

export default Following;
