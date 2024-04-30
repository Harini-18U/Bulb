import React from "react";

const ToggleBulbOnAndOff = () => {
    const [light, setLight] = React.useState(false);
    const toggleDisplay = () => {
        setLight(!light);
    };
    return (
        <>
        <button onClick={toggleDisplay}>Light {light ? 'on':'off'}</button>
        {light ? (
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" alt="off"/>
        ) : (
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg" alt="on"/>
        )}
        </>
    );
};
export default ToggleBulbOnAndOff;