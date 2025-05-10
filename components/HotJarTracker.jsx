// components/HotjarTracker.jsx
'use client'; // Mark this component as a Client Component

import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const HotjarTracker = () => {
    useEffect(() => {
        const siteId = 5132279;
        const hotjarVersion = 6;
        Hotjar.init(siteId, hotjarVersion);
    }, []);

    return null;
};

export default HotjarTracker;
