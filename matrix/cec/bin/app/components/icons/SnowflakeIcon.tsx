
import React from 'react';

const SnowflakeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
        <path d="M12 2v4" />
        <path d="M12 22v-4" />
        <path d="M2 12h4" />
        <path d="M22 12h-4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M19.07 19.07l-2.83-2.83" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M19.07 4.93l-2.83 2.83" />
    </svg>
);

export default SnowflakeIcon;
