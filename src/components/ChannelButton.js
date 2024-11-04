import React, { memo } from 'react';

const ChannelButton = memo(({ channel, onClick, className = 'channel-button' }) => (
    <button
        className={className}
        onClick={() => onClick(channel)}
    >
        {channel}
    </button>
));

ChannelButton.displayName = 'ChannelButton';

export default ChannelButton;