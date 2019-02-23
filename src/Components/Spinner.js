import React from 'react';

const Spinner = (props) => {
    const { message } = props;

    return (
        <div className='ui active dimmer'>
            <div className='ui big text loader'>
               { message }
            </div>
        </div>
    );
}
 
export default Spinner;
