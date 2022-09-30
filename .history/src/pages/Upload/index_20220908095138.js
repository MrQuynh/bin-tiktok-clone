import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';

import styles from './Upload.module.scss';
import images from '~/assets/images';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);
const linkImage1 =
    'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg';
const linkImage2 =
    'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg';
function Upload() {
    const whoViewList = ['Public', 'Friends', 'Private'];

    const [runcheck, setRuncheck] = useState(false);
    const [whoView, setWhoView] = useState(false);
    const [hasVideo, setHasVideo] = useState(false);
    // const whoValue = whoViewList[0];
    const [whoValue, setWhoValue] = useState('');

    const onUpload = () => {
        document.getElementById('input-upload').click();
    };

    // get value
    const [description, setDescription] = useState('');
    const [valueVideo, setValueVideo] = useState('');

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };
    // console.log(valueVideo);
    const handleValueVideo = (e) => {
        // setValueVideo(e.target.value);
        const file = document.querySelector('#input-upload').files[0];
        const preview = document.querySelector('#video-edit-upload');
        // const preVideo = document.querySelector('#left-video');
        const reader = new FileReader();
        reader.addEventListener(
            'load',
            () => {
                preview.src = reader.result;

                // preVideo.src = reader.result;
                setValueVideo(reader.result);
            },
            false,
        );
        if (file) {
            reader.readAsDataURL(file);
            setHasVideo(true);
        }
    };
    // console.log(valueVideo);
    // send data to server
    const dataSend = { viewable: 'public', description: 'hello ae f8' };
    const handleSubmit = () => {
        console.log(dataSend);
        userService.postCreateVideo(dataSend).then((data) => console.log(data));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('upload')}>
                    <div className={cx('upload-title')}>Upload video</div>
                    <div className={cx('upload-title-small')}>Post a video to your account</div>
                    <div className={cx('upload-body')}>
                        <div className={cx('left')}>
                            {hasVideo ? (
                                <div className={cx('left-video-background')}>
                                    <Image src={images.phoneBackground} className={cx('left-video-background')} />
                                    {valueVideo && (
                                        <video className={cx('left-video')} id="left-video" controls>
                                            <source src={valueVideo} />
                                        </video>
                                    )}
                                </div>
                            ) : (
                                <div className={cx('left-wrapper')} onClick={onUpload}>
                                    <input
                                        type="file"
                                        // value={valueVideo}
                                        onChange={handleValueVideo}
                                        id="input-upload"
                                        className={cx('input-upload')}
                                    />
                                    <Image
                                        className={cx('left-icon')}
                                        src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                                    />
                                    <div className={cx('left-text-main')}>Select video to upload</div>
                                    <div className={cx('left-text-sub')}>Or drag and drop a file</div>
                                    <div className={cx('left-text-video-info')}>MP4 or WebM</div>
                                    <div className={cx('left-text-video-info')}>720x1280 resolution or higher</div>
                                    <div className={cx('left-text-video-info')}>Up to 10 minutes</div>
                                    <div className={cx('left-text-video-info')}>Less than 2GB</div>
                                    <Button primary className={cx('left-select-btn')}>
                                        Select file
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('caption-wrap')}>
                                <div className={cx('label', 'label-caption')}>
                                    <p>Caption</p> <span>0 / 150</span>
                                </div>
                                <div className={cx('box', 'box-input')}>
                                    <input
                                        type="text"
                                        value={description}
                                        onChange={handleDescription}
                                        className={cx('input')}
                                    />
                                    <div className={cx('input-style')}>
                                        <span>@</span>
                                        <span>#</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('caption-wrap')}>
                                <div className={cx('label')}>Cover</div>

                                <div className={cx('box', 'box-cover')}>
                                    {/* {hasVideo ? ( */}
                                    <div className={cx('cover-video')}>
                                        <video controls id="video-edit-upload" className={cx('cover-video')}>
                                            <source src="" />
                                        </video>
                                    </div>
                                    {/* ) : (
                                        <></>
                                    )} */}
                                    <div className={cx('cover-video')}></div>
                                </div>
                            </div>

                            <div className={cx('caption-wrap')}>
                                <div className={cx('label')}>Who can view this video</div>
                                <div className={cx('box', 'box-public')} onClick={() => setWhoView(!whoView)}>
                                    <p>{whoValue || 'Public'}</p>
                                    <AiFillCaretDown className={cx('icon-down', whoView && 'route')} />
                                    {whoView && (
                                        <div className={cx('choose-module')}>
                                            {whoViewList.map((data, index) => (
                                                <div
                                                    className={cx('choose-item')}
                                                    key={index}
                                                    onClick={() => setWhoValue(data)}
                                                >
                                                    <span className={cx('choose-text')}>{data}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={cx('caption-wrap')}>
                                <div className={cx('label')}>Allow users to:</div>
                                <div className={cx('allow-check')}>
                                    <div className={cx('allow-check-item')}>
                                        <input type="checkbox" />
                                        <p>Comment</p>
                                    </div>
                                    <div className={cx('allow-check-item')}>
                                        <input type="checkbox" />
                                        <p>Duet</p>
                                    </div>
                                    <div className={cx('allow-check-item')}>
                                        <input type="checkbox" />
                                        <p>Stitch</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('label', 'label-run')}>
                                <p> Run a copyright check</p>{' '}
                                <div
                                    className={cx('switch', runcheck && 'turn-on')}
                                    onClick={() => setRuncheck(!runcheck)}
                                >
                                    <p className={cx('switch-inner')}></p>
                                </div>
                            </div>
                            {runcheck ? (
                                <div className={cx('text-run-on')}>
                                    <BiErrorCircle className={cx('text-run-on-icon')} />
                                    <p>Copyright check will not begin until your video is uploaded.</p>
                                </div>
                            ) : (
                                <div className={cx('text-run-off')}>
                                    We'll check your video for potential copyright infringements on used sounds. If
                                    infringements are found, you can edit the video before posting.{' '}
                                    <span>Learn more</span>
                                </div>
                            )}
                            <div className={cx('btn-body')}>
                                <Button outline large className={cx('btn')} onClick={handleSubmit}>
                                    Discard
                                </Button>
                                <Button outline large disabled className={cx('btn', valueVideo && 'btn-active')}>
                                    Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={cx('footer', 'grid')}>
                <div className={cx('footer-start')}>
                    <div className={cx('image')}>
                        <Image src={linkImage1} />
                        <Image src={linkImage2} />
                    </div>
                    <div className={cx('footer-list')}>
                        <h4 className={cx('footer-label')}>Company</h4>
                        <Link className={cx('footer-item')} to="#">
                            About
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            TikTok Browse
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Newsroom
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Contact
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Career
                        </Link>
                    </div>

                    <div className={cx('footer-list')}>
                        <h4 className={cx('footer-label')}>Programs</h4>
                        <Link className={cx('footer-item')} to="#">
                            TikTok for Good
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Advertise
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Developes
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            TiTok Rewards
                        </Link>
                    </div>

                    <div className={cx('footer-list')}>
                        <h4 className={cx('footer-label')}>Support</h4>
                        <Link className={cx('footer-item')} to="#">
                            Help Center
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Safety Center
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Creator Portal
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Community Guidelines
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Transparency
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Accessibility
                        </Link>
                    </div>

                    <div className={cx('footer-list')}>
                        <h4 className={cx('footer-label')}>Legal</h4>
                        <Link className={cx('footer-item')} to="#">
                            Terms of Use
                        </Link>
                        <Link className={cx('footer-item')} to="#">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className={cx('footer-end')}>
                    <div className={cx('footer-lang')}>
                        <p>English</p>
                        <AiFillCaretDown />
                    </div>
                    <span className={cx('footer-copy-right')}>© 2022 TikTok</span>
                </div>
            </footer>
        </div>
    );
}

export default Upload;
