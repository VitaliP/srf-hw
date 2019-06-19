import React from 'react';

const Loading = () => {

    return (
        <div>
            <div className="spinner-border" role="status"></div>
            <span className="loading-lbl" data-test="loading">Loading...</span>
        </div>
    )

};


export default Loading;