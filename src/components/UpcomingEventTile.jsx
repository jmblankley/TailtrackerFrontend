import PropTypes from 'prop-types';

const UpcomingEventTile = ({ backgroundColor, eventName, date, time}) => {
  return ( 
    <div 
      className="upcomingEventTile container d-flex p-3 mt-3 mb-3 shadow-sm text-white flex-column " 
      style={{ backgroundColor, cursor: 'pointer' }} 
    >
      <h5 className="fw-bold p-0 m-0 mb-2">{eventName}</h5>
      <h5 className="fw-bold p-0 m-0">{date} @ {time}</h5>
    </div>
  );
}

UpcomingEventTile.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};
 
export default UpcomingEventTile;
