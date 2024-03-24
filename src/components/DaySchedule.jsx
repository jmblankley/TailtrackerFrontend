import IndividualEventTile from "./IndividualEventTile";
import PropTypes from 'prop-types'

const DaySchedule = ({activeRing}) => {
    
    // Function to fetch the Overall Event data
    // const fetchData = () => {
    // Implement data fetching logic here
    // }

    // Dummy data for individual event start and end times
    const eventTimes = [
        { startTime: new Date().setHours(8, 0, 0, 0), endTime: new Date().setHours(10, 30, 0, 0), eventName: "Novice JWW", backgroundColor: "#0d98ba", entryNum: 5 },
        { startTime: new Date().setHours(10, 30, 0, 0), endTime: new Date().setHours(12, 0, 0, 0), eventName: "Open JWW", backgroundColor: "#3CB371", entryNum: 8 },
        { startTime: new Date().setHours(12, 0, 0, 0), endTime: new Date().setHours(14, 0, 0, 0), eventName: "M/X JWW", backgroundColor: "#ff8a00", entryNum: 22 },
        { startTime: new Date().setHours(14, 0, 0, 0), endTime: new Date().setHours(15, 0, 0, 0), eventName: "Premier JWW", backgroundColor: "#9b30ff", entryNum: 22 },
    ];
    

    const startTime = new Date();
    startTime.setHours(8, 0, 0, 0); // Dummy start time for demonstration (8:00 AM)

    // Dummy data for individual event end times
    const eventEndTimes = [
        new Date().setHours(10, 30, 0, 0), // Example end time 1 (10:30 AM)
        new Date().setHours(15, 0, 0, 0), // Example end time 2 (2:10 PM)
        // Add more individual event end times as needed
    ];

    // Find the maximum end time among individual events
    const maxEndTime = new Date(Math.max(...eventEndTimes));

    // Round up the maximum end time to the nearest hour
    maxEndTime.setHours(maxEndTime.getHours() + 1, 0, 0, 0);

    // Calculate the number of lines based on the start time and the nearest hour from the last event
    const startHour = startTime.getHours();
    const endHour = maxEndTime.getHours();
    const numLines = (endHour - startHour) * 2 + 1; // Calculate number of lines from startHour to endHour

    // Generate lines based on the calculated number of lines
    const lines = Array.from({ length: numLines }, (_, index) => index);

    // Function to get the time label based on the line number
    const getTimeLabel = (lineNumber) => {
        const hour = startHour + Math.floor(lineNumber / 2);
        const period = hour < 12 ? 'am' : 'pm';
        const displayHour = hour <= 12 ? hour : hour - 12;
        return `${displayHour}${period}`;
    }

    return ( 
        <div className="scheduleLines">
            {activeRing === 1 && (
            <div className="ring">
                <h2>Ring #1</h2>
                <div className="linesContainer">
                    {lines.map((lineNumber) => (
                        <div key={lineNumber} className="line">
                            {lineNumber % 2 === 0 ? <div className="time-label">{getTimeLabel(lineNumber)}</div> : null}
                        </div>
                    ))}
                    
                    <div className="eventTiles">
                        {eventTimes.map((event) => {
                            // Calculate the duration of the event in milliseconds
                            const duration = event.endTime - event.startTime;
                            
                            // Convert the duration to hours
                            const hours = duration / (1000 * 60 * 60);
                        
                            // Calculate the length of the event tile in pixels based on the duration
                            const length = hours * 100; // Assuming 1 hour = 100 pixels
                        
                            // Render the IndividualEventTile component with the calculated length
                            return (
                                <IndividualEventTile
                                    key={`${event.startTime}-${event.eventName}`}
                                    backgroundColor={event.backgroundColor}
                                    length={length} // Pass the calculated length as props
                                    eventName={event.eventName}
                                    startTime={new Date(event.startTime)}
                                    endTime={new Date(event.endTime)}
                                    entryNum={event.entryNum}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            )}
            {(window.innerWidth >= 768 || activeRing === 2) && (
            <div className="ring secondRing">
                <h2>Ring #2</h2>
            <div className="linesContainer ">
                {lines.map((lineNumber) => (
                    <div key={lineNumber} className="line">
                        {lineNumber % 2 === 0 ? <div className="time-label">{getTimeLabel(lineNumber)}</div> : null}
                    </div>
                ))}
                <div className="eventTiles">
                    {eventTimes.map((event) => {
                        // Calculate the duration of the event in milliseconds
                        const duration = event.endTime - event.startTime;
                        
                        // Convert the duration to hours
                        const hours = duration / (1000 * 60 * 60);
                    
                        // Calculate the length of the event tile in pixels based on the duration
                        const length = hours * 100; // Assuming 1 hour = 100 pixels
                    
                        // Render the IndividualEventTile component with the calculated length
                        return (
                            <IndividualEventTile
                                key={`${event.startTime}-${event.eventName}`}
                                backgroundColor={event.backgroundColor}
                                length={length} // Pass the calculated length as props
                                eventName={event.eventName}
                                startTime={new Date(event.startTime)}
                                endTime={new Date(event.endTime)}
                                entryNum={100}
                            />
                        );
                    })}
                </div>
            </div></div>
            )}
        </div>
    );
    
}

DaySchedule.propTypes = {
    activeRing: PropTypes.number.isRequired
}

export default DaySchedule;
