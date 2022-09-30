import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';

import Image from '../Image';
import styles from './SuggestAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import Button from '../Button';
import { useState, memo, useCallback } from 'react';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function AccountItem({ data, isFollowBtn }) {
    const name = data.first_name + ' ' + data.last_name;
    const [follow, setFollow] = useState(true);
    const handleClick = useCallback(() => {
        setFollow(!follow);
        if (follow) {
            userService.postFollow(data.id);
        } else {
            userService.postUnFollow(data.id);
        }
    }, []);

    return (
        <div>
            <Tippy
                interactive
                placement="bottom"
                delay={[500, 200]}
                render={
                    !isFollowBtn
                        ? () => (
                              <div className={cx('account')}>
                                  <div className={cx('account-header')}>
                                      <Link to={'/@' + data.nickname}>
                                          <Image className={cx('avatar', 'large')} src={data.avatar} />
                                      </Link>

                                      {!follow ? (
                                          <Button
                                              outline
                                              className={cx('btn-account-follow', 'btn-small-account')}
                                              onClick={handleClick}
                                          >
                                              Following
                                          </Button>
                                      ) : (
                                          <Button primary className={cx('btn-small-account')} onClick={handleClick}>
                                              Follow
                                          </Button>
                                      )}
                                  </div>
                                  <div className={cx('info', 'info-follow')}>
                                      <Link
                                          to={{
                                              pathname: '/@' + data.nickname,
                                          }}
                                      >
                                          <h4 className={cx('nick-name', 'bold')}>
                                              {data.nickname}{' '}
                                              {data.tick && <AiFillCheckCircle className={cx('icon')} />}
                                          </h4>
                                      </Link>
                                      <Link to={'/@' + data.nickname}>
                                          <p className={cx('name', 'medium')}>{name}</p>
                                      </Link>
                                      <div className={cx('vote-body')}>
                                          <strong className={cx('vote')}>{data.followers_count}</strong> Followers
                                          <strong className={cx('vote')}>{data.likes_count}</strong> Likes
                                      </div>
                                  </div>
                              </div>
                          )
                        : () => {}
                }
            >
                <div>
                    <Link
                        to={{
                            pathname: '/@' + data.nickname,
                        }}
                        className={cx('item')}
                    >
                        <Image className={cx('avatar')} src={data.avatar} />
                        <div className={cx('info')}>
                            <h4 className={cx('nick-name')}>
                                {data.nickname} {data.tick && <AiFillCheckCircle className={cx('icon')} />}
                            </h4>
                            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                        </div>
                    </Link>
                </div>
            </Tippy>
        </div>
    );
}

export default memo(AccountItem);
