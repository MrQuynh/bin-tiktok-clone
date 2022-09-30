import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalSettings.module.scss';
import * as userService from '~/services/userService';
import { createBrowserHistory } from 'history';

const cx = classNames.bind(styles);
const allowList = ['Allow Comment', 'Allow Duet', 'Allow Stitch'];
function ModuleSettings({ title, setModal, idVideo }) {
    const [runcheck, setRuncheck] = useState(false);
    const [duet, setDuet] = useState(false);
    const [stitch, setStitch] = useState(false);
    const [optionActive, setOptionActive] = useState(false);
    const [option, setOption] = useState('Public');

    const history = createBrowserHistory();
    const goBack = () => {
        history.back(-1);
    };

    const handleDelete = () => {
        userService.deleteVideo(idVideo);
        setModal(false);
        goBack();
    };
    const HandleCancel = () => {
        setModal(false);
    };
    const handleOption = () => {
        setOptionActive(!optionActive);
    };
    console.log(idVideo);

    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    {title === 'delete' ? (
                        <div className={cx('body-delete')}>
                            <div className={cx('delete-title')}>Are you sure you want to delete this video?</div>
                            <div className={cx('btn-save', 'delete-btn')} onClick={handleDelete}>
                                Delete
                            </div>
                        </div>
                    ) : (
                        <div className={cx('content')}>
                            <h2 className={cx('title')}>Privacy settings</h2>
                            <p className={cx('desc')}>Who can watch this video</p>
                            <div className={cx('select-contain')} onClick={handleOption}>
                                <p>{option}</p>
                                <AiFillCaretDown className={cx('select-icon')} />
                                <div className={cx('option-group', optionActive && 'option-active')}>
                                    <div
                                        className={cx('option-item')}
                                        onClick={() => {
                                            setOption('Public');
                                            setOptionActive(false);
                                        }}
                                    >
                                        <p className={cx('option-title')}>Public</p>
                                        <span className={cx('select-desc')}>Anyone on TikTok</span>
                                    </div>
                                    <div
                                        className={cx('option-item')}
                                        onClick={() => {
                                            setOption('Friends');
                                            setOptionActive(false);
                                        }}
                                    >
                                        <p className={cx('option-title')}>Friends</p>
                                        <span className={cx('select-desc')}>Followers that you follow back</span>
                                    </div>
                                    <div
                                        className={cx('option-item')}
                                        onClick={() => {
                                            setOption('Privacy');
                                            setOptionActive(false);
                                        }}
                                    >
                                        <p className={cx('option-title')}>Private</p>
                                        <span className={cx('select-desc')}>Visible to me only</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('switch-group')}>
                                <div className={cx('label', 'label-run')}>
                                    <p> Allow comment</p>
                                    <div
                                        className={cx('switch', runcheck && 'turn-on')}
                                        onClick={() => setRuncheck(!runcheck)}
                                    >
                                        <p className={cx('switch-inner')}></p>
                                    </div>
                                </div>
                                <div className={cx('label', 'label-run')}>
                                    <p> Allow Duet</p>
                                    <div
                                        className={cx(
                                            'switch',

                                            duet && 'turn-on',
                                        )}
                                        onClick={() => setDuet(!duet)}
                                    >
                                        <p className={cx('switch-inner')}></p>
                                    </div>
                                </div>
                                <div className={cx('label', 'label-run')}>
                                    <p> Allow Stitch</p>
                                    <div
                                        className={cx(
                                            'switch',

                                            stitch && 'turn-on',
                                        )}
                                        onClick={() => setStitch(!stitch)}
                                    >
                                        <p className={cx('switch-inner')}></p>
                                    </div>
                                </div>
                            </div>
                            <p className={cx('content-text')}>
                                Duet/React and Stitch aren't available on videos from private accounts
                            </p>
                        </div>
                    )}
                    {title === 'delete' ? (
                        <div className={cx('btn-save')} onClick={HandleCancel}>
                            {' '}
                            Cancel
                        </div>
                    ) : (
                        <div className={cx('btn-save')} onClick={HandleCancel}>
                            {' '}
                            Done
                        </div>
                    )}
                </div>
            </div>
        </Portal>
    );
}

export default ModuleSettings;
