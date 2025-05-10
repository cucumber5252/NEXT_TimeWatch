'use client';

import { useEffect, useState } from 'react';

const CoupangMainAd = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <iframe
            src="https://ads-partners.coupang.com/widgets.html?id=834956&template=carousel&trackingCode=AF3488703&subId=&width=400&height=400&tsource="
            width="400"
            height="250"
            frameBorder="0"
            referrerPolicy="unsafe-url"
            style={{ border: 'none', overflow: 'hidden' }}
            browsingtopics="true"
        ></iframe>
    );
};

export default CoupangMainAd;
