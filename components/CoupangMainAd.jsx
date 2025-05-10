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
            src="https://ads-partners.coupang.com/widgets.html?id=834701&template=carousel&trackingCode=AF3488703&subId=&width=728&height=90&tsource="
            width="728"
            height="90"
            frameBorder="0"
            referrerPolicy="unsafe-url"
            style={{ border: 'none', overflow: 'hidden' }}
            browsingtopics="true"
        ></iframe>
    );
};

export default CoupangMainAd;
