import React from 'react';

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const displayText = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
    const iconImage = season === 'winter' ? 'snowflake' : 'sun';

    return (
        <div>
            <i className={`${iconImage} icon`} />
            <h1>{displayText}</h1>
            <i className={`${iconImage} icon`} />
        </div>
    )
}

const getSeason = (latitude, month) => {    // Helper function to determine winter/summer depending on lat location
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter'
    } else {
        return latitude > 0 ? 'winter' : 'summer'
    }
}

export default SeasonDisplay;