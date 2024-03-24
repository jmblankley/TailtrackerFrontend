import PropTypes from 'prop-types';

const ClassEventTile = ({ backgroundColor, eventName, className, ringNumber,startTime, endTime, entryNum }) => {

      // Function to format time as HH:mm
      const formatTime = (time) => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return ( 
        <div 
        className="individualEventTile p-4 shadow-sm text-white justify-content-evenly text-center" 
        style={{ backgroundColor}}>
            <h5 className="p-0 m-0 mb-3">{eventName}</h5>
            <h5 className="p-0 m-0 mb-3">{className}</h5>
            <h5 className="p-0 m-0 mb-3">Ring {ringNumber}</h5>
            <h5 className="p-0 m-0 mb-3">{formatTime(startTime)} - {formatTime(endTime)}</h5>
            <h5 className="p-0 m-0">{entryNum} entries</h5>
      </div>
     );
}

ClassEventTile.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    entryNum: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    ringNumber: PropTypes.number,
    startTime: PropTypes.instanceOf(Date).isRequired,
    endTime: PropTypes.instanceOf(Date).isRequired,
  };

 
export default ClassEventTile;