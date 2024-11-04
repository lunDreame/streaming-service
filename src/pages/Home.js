import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import ChannelButton from '../components/ChannelButton';

const Home = () => {
    const navigate = useNavigate();
    const { channels } = useApp();

    const handleChannelClick = useCallback((channel) => {
        navigate(`/channel/${channel}`);
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <h1>방송사 선택</h1>
                <div className="channel-list">
                    {channels.map((channel) => (
                        <ChannelButton
                            key={channel}
                            channel={channel}
                            onClick={handleChannelClick}
                        />
                    ))}
                </div>
            </main>

            <footer className="py-6 px-4 border-t border-gray-200">
                <div className="max-w-2xl mx-auto text-center text-sm text-gray-600">
                    <div className="mb-4">
                        <p>※ 본 서비스에서 제공되는 콘텐츠는 각 방송사 플랫폼의 자산이며,</p>
                        <p>방송사의 정책 및 제공 여부에 따라 서비스가 중단될 수 있습니다.</p>
                    </div>

                    <div className="space-y-2">
                        <p>방송사 추가 요청 및 기타 문의:</p>
                        <div className="flex justify-center items-center gap-3">
                            <a
                                href="https://github.com/lunDreame"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
                            >
                                GitHub
                            </a>
                            <span> | </span>
                            <a
                                href="mailto:lundreame34@gmail.com"
                                className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 text-gray-500">
                        © 2024 lunDreame
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;