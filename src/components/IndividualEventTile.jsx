import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const IndividualEventTile = ({ backgroundColor, length, eventName, startTime, endTime, entryNum }) => {
    // Function to format time as HH:mm
    const formatTime = (time) => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <Link
            to={{
                pathname: '/class-event/${eventId}'
            }}
            style={{ textDecoration: 'none' }}
        >
            <div
                className="individualEventTile d-flex flex-column p-4 shadow-sm text-white justify-content-evenly"
                style={{ backgroundColor, cursor: 'pointer', height: `${length}px` }}
            >
                <h5 className="fw-bold p-0 m-0">{eventName}</h5>
                <p className='m-0'>{formatTime(startTime)} - {formatTime(endTime)}</p>
                <p className='m-0'>{entryNum} entries</p>
            </div>
        </Link>
    );
}

IndividualEventTile.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date).isRequired,
    endTime: PropTypes.instanceOf(Date).isRequired,
    entryNum: PropTypes.number.isRequired
};

export default IndividualEventTile;
