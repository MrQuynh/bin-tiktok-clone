import Portal from '../Portal';
import classNames from 'classnames/bind';
import styles from './ModalEdit.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import Image from '~/components/Image';
import { FiEdit } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import * as userService from '~/services/userService';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ModalEdit({ setModalEdit, avatar, nickname, name, bio }) {
    const [nicknameEdit, setNicknameEdit] = useState(nickname);
    const [avatarEdit, setAvatarEdit] = useState(avatar);
    const [nameEdit, setNameEdit] = useState(name);
    const [bioEdit, setBioEdit] = useState(bio);

    const handleEditAvatar = () => {
        const inputFile = document.getElementById('input-edit');
        inputFile.click();
        // setAvatarEdit()
    };
    const handleInputAvatar = (e) => {
        // setAvatarEdit(e.target.value);
    };

    const handleCloseModel = () => {
        setModalEdit(false);
    };

    const handleTextNickname = (e) => {
        setNicknameEdit(e.target.value);
    };
    const handleTextName = (e) => {
        setNameEdit(e.target.value);
    };
    const handleTextBio = (e) => {
        setBioEdit(e.target.value);
    };
    // save
    const handleCancel = () => {
        setModalEdit(false);
    };

    const dataSend = { first_name: nameEdit, bio: bioEdit };
    const handleSave = () => {
        setModalEdit(false);
        userService.postUpdateUser(dataSend).then((data) => console.log(data));
        window.location.reload();
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
                                <Image src={avatarEdit} className={cx('avatar')} />
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
                            <div className={cx('content-label')}>Name</div>
                            <div className={cx('edit-area')}>
                                <input
                                    type="text"
                                    className={cx('input-text')}
                                    value={nameEdit}
                                    onChange={handleTextName}
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
