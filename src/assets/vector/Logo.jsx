import React from 'react';

const Logo = () => {
    return (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="70" height="70" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0" transform="scale(0.00390625)"/>
                </pattern>
                <image id="image0" width="256" height="256" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    );
};

export default Logo;