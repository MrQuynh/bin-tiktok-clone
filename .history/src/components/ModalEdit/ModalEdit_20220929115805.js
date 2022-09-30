import Portal from '../Portal';
import classNames from 'classnames/bind';
import styles from './ModalEdit.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import Image from '~/components/Image';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function ModalEdit({ setModalEdit, avatar, firstName1, lastName1, nickname, bio }) {
    const [nicknameEdit, setNicknameEdit] = useState(nickname);
    const [bioEdit, setBioEdit] = useState(bio);
    const [firstName, setFirstName] = useState(firstName1);
    const [lastName, setLastName] = useState(lastName1);
    const [avatarEdit, setAvatarEdit] = useState('');

    const handleEditAvatar = () => {
        const inputFile = document.getElementById('input-edit');
        inputFile.click();
        // setAvatarEdit()
    };
    const handleInputAvatar = (e) => {
        setAvatarEdit(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    const handleCloseModel = () => {
        setModalEdit(false);
    };

    const handleTextNickname = (e) => {
        setNicknameEdit(e.target.value);
    };

    const handleTextBio = (e) => {
        setBioEdit(e.target.value);
    };
    // save
    const handleCancel = () => {
        setModalEdit(false);
    };

    const dataSend = { first_name: firstName, bio: bioEdit };
    const handleSave = () => {
        setModalEdit(false);
        userService.postUpdateUser(dataSend).then((data) => console.log(data));
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('header')}>
                        <div>Edit profile</div>
                        <div className={cx('icon-close')} onClick={handleCloseModel}>
                            <AiOutlineClose className={cx('icon-close-item')} />
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Profile photo</div>
                            <div className={cx('avatar-content')} onClick={handleEditAvatar}>
                                <input
                                    type="file"
                                    id="input-edit"
                                    className={cx('input-edit')}
                                    onChange={handleInputAvatar}
                                />
                                <Image src={avatar} className={cx('avatar')} />
                                <div className={cx('icon-edit')}>
                                    <FiEdit />
                                </div>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Username</div>
                            <div className={cx('edit-area')}>
                                <input
                                    type="text"
                                    className={cx('input-text')}
                                    value={nicknameEdit}
                                    onChange={handleTextNickname}
                                />
                                <p className={cx('link-username')}>www.tiktok.com/@{nicknameEdit}</p>
                                <p className={cx('site-username')}>
                                    Usernames can only contain letters, numbers, underscores, and periods. Changing your
                                    username will also change your profile link.
                                </p>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>First name</div>
                            <div className={cx('edit-area')}>
                                <input
                                    type="text"
                                    className={cx('input-text')}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            <div className={cx('content-label')}>Last name</div>
                            <div className={cx('edit-area')}>
                                <input
                                    type="text"
                                    className={cx('input-text')}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('content-item', 'last-item')}>
                            <div className={cx('content-label')}>Bio</div>
                            <div>
                                <div className={cx('edit-area', 'input-text', 'bio')}>
                                    <textarea
                                        type="text"
                                        className={cx('input-bio')}
                                        value={bioEdit}
                                        onChange={handleTextBio}
                                    />
                                </div>
                                <span className={cx('text-count')}>0/80</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <button className={cx('btn')} onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className={cx('btn', 'active')} onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default ModalEdit;
