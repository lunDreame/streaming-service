import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

const ChannelSelection = () => {
    const { channelName } = useParams();
    const navigate = useNavigate();
    const { subChannels, selectedChannelType, setSelectedChannelType } = useApp();

    const channelTypes = ['TV', 'Radio'];
    const currentChannels = subChannels[channelName]?.[selectedChannelType] || [];

    const handleChannelClick = (channel) => {
        navigate(`/watch/${channel.id}`);
    };

    return (
        <div className="channel-selection">
            <h2>{channelName} {selectedChannelType}</h2>

            <div className="channel-type-tabs">
                {channelTypes.map((type) => (
                    <button
                        key={type}
                        className={`tab-button ${selectedChannelType === type ? 'active' : ''}`}
                        onClick={() => setSelectedChannelType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="channel-list">
                {currentChannels.map((channel) => (
                    <div
                        key={channel.id}
                        className="channel-card"
                        onClick={() => handleChannelClick(channel)}
                    >
                        <h3>{channel.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChannelSelection;