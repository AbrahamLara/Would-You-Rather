import React from 'react';
import '../style/Question404.css';

// When visiting a question page with an invalid
// id that belongs to no existing question this component
// should be displayed
function Question404 (props) {
    return (
        <div className='Question404'>
            <strong className='q40-header'>Uh Oh!</strong>
            <span className='q404-text'>
                It seems the question with the following id does not exist:
                <span className='q404-id'>{props.id}</span>
            </span>
        </div>
    );
}

export default Question404;