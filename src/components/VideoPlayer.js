import React, { useEffect, useRef, memo, useState } from 'react';
import Hls from 'hls.js';

const VideoPlayer = memo(({ streamUrl }) => {
    const videoRef = useRef(null);
    const hlsRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const video = videoRef.current;

        if (!video || !streamUrl) return;

        const initHls = () => {
            if (hlsRef.current) {
                hlsRef.current.destroy();
            }

            if (Hls.isSupported()) {
                const hls = new Hls({
                    debug: false,
                    enableWorker: true,
                    backBufferLength: 30,
                    maxBufferSize: 0,
                    maxBufferLength: 30,
                    liveSyncDurationCount: 3,
                    manifestLoadingTimeOut: 20000,
                    manifestLoadingMaxRetry: 6,
                    levelLoadingTimeOut: 20000,
                    fragLoadingTimeOut: 20000,
                    fragLoadingMaxRetry: 6,
                });

                hls.loadSource(streamUrl);
                hls.attachMedia(video);

                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    setIsLoading(false);
                    video.play().catch(error => {
                        console.warn('Autoplay failed:', error);
                    });
                });

                hls.on(Hls.Events.ERROR, (event, data) => {
                    if (data.fatal) {
                        switch (data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                console.log('Network error, attempting recovery...');
                                hls.startLoad();
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                console.log('Media error, attempting recovery...');
                                hls.recoverMediaError();
                                break;
                            default:
                                console.error('Fatal error:', data);
                                setIsLoading(false);
                                break;
                        }
                    }
                });

                hlsRef.current = hls;
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = streamUrl;
                video.addEventListener('loadedmetadata', () => {
                    setIsLoading(false);
                    video.play().catch(error => {
                        console.warn('Autoplay failed:', error);
                    });
                });
            }
        };

        initHls();

        return () => {
            const currentVideo = video;
            const currentHls = hlsRef.current;

            if (currentHls) {
                currentHls.stopLoad();
                currentHls.detachMedia();
                currentHls.destroy();
                hlsRef.current = null;
            }

            if (currentVideo) {
                currentVideo.removeAttribute('src');
                currentVideo.load();
            }
        };
    }, [streamUrl]);

    return (
        <div className="video-player-container">
            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-spinner" />
                </div>
            )}
            <video
                ref={videoRef}
                controls
                className={`video-player ${isLoading ? 'loading' : ''}`}
                playsInline
                autoPlay
            />
        </div>
    );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;