import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        <div className="examples1">
            <div className="examples1">
                <iframe src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;