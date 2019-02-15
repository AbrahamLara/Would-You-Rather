import React from 'react';
import '../style/ProgressBar.css'

function ProgressBar (props) {
    const { value, max, height='fit-content', width='100%' } = props;
    const progress = (value / max) * 100;

    return (
        <div className='ProgressBar' style={{ height, width, }}>
            <div className='progress' style={{ width: `${progress}%` }}>
                {progress % 1 === 0 ? progress : progress.toFixed(1)}%
            </div>
        </div>
    );
}

export default ProgressBar;