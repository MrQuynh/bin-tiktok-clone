import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { BsVolumeMuteFill } from 'react-icons/bs';
import styles from './volume.module.scss';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);
const initVolume = localStorage.getItem('VOLUME') / 100;

function Volume({ videoRef }) {
    const [state, dispatch] = useStore();
    const progressRef = useRef();
    const [inputValue, setInputValue] = useState(state.volumeRedux);
    const handleInput = (e) => {
        progressRef.current.value = e.target.value;
        setInputValue(e.target.value);
        setVolume(e.target.value / 100);
        localStorage.setItem('VOLUME', e.target.value);
    };
    const [volume, setVolume] = useState(state.volumeRedux);
    useEffect(() => {
        videoRef.current.volume = volume;
    }, [volume]);

    const silentVolume = () => {
        if (volume !== 0) {
            setVolume(0);
            setInputValue(0);
            progressRef.current.value = 0;
        } else {
            setVolume(initVolume);
            setInputValue(initVolume * 100);
            progressRef.current.value = initVolume * 100;
        }
    };

    return (
        <div className={cx('pause-body1')}>
            <div className={cx('volume')}>
                <div className={cx('slider-count')}>
                    <div className={cx('slider')}>
                        <input type="range" min="0" max="100" value={inputValue} onInput={handleInput} />
                        <progress id="progress" ref={progressRef} min="0" max="100" value={inputValue} />
                    </div>
                </div>
            </div>

            {volume === 0 ? (
                <BsVolumeMuteFill className={cx('sound-icon')} onClick={silentVolume} />
            ) : (
                <AiFillSound className={cx('sound-icon')} onClick={silentVolume} />
            )}
        </div>
    );
}

export default Volume;
