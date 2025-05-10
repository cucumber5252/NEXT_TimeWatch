'use client';

import { useEffect, useState } from 'react';

const CoupangSidebarAd = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <iframe
            src="https://ads-partners.coupang.com/widgets.html?id=834959&template=carousel&trackingCode=AF3488703&subId=&width=336&height=336&tsource="
            width="336"
            height="336"
            frameBorder="0"
            referrerPolicy="unsafe-url"
            style={{ border: 'none', overflow: 'hidden' }}
            browsingtopics="true"
        ></iframe>
    );
};

export default CoupangSidebarAd;
