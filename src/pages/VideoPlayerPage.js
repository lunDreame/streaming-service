import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import VideoPlayer from '../components/VideoPlayer';

const VideoPlayerPage = () => {
    const { subChannel } = useParams();
    const navigate = useNavigate();
    const { streams, channels, subChannels } = useApp();

    const channelDisplayName = useMemo(() => {
        for (const broadcaster of channels) {
            const channelData = subChannels[broadcaster];
            if (!channelData) continue;

            for (const type of ['TV', 'Radio']) {
                const typeChannels = channelData[type];
                if (!typeChannels) continue;

                const channel = typeChannels.find(ch => ch.id === subChannel);
                if (channel) {
                    return channel.name;
                }
            }
        }
        return subChannel;
    }, [channels, subChannels, subChannel]);

    const streamUrl = useMemo(() => streams[subChannel], [streams, subChannel]);

    if (!streamUrl) {
        return (
            <div className="error-message">
                <h2>스트림을 찾을 수 없습니다</h2>
                <button
                    onClick={() => navigate('/')}
                    className="channel-button"
                >
                    홈으로 돌아가기
                </button>
            </div>
        );
    }

    return (
        <div className="video-container">
            <h2>{channelDisplayName} 방송 보기</h2>
            <VideoPlayer streamUrl={streamUrl} />
            <button
                onClick={() => navigate('/')}
                className="channel-button"
                style={{ marginTop: '1rem' }}
            >
                다른 채널 보기
            </button>
        </div>
    );
};

export default VideoPlayerPage;