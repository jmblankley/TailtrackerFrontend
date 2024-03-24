import exclamation from '../assets/exclamation-circle.svg';
import PropTypes from 'prop-types';

const VolunteerTile = ({ title, name }) => {
    return (
        <div className="volunteerTile d-flex flex-column justify-content-center align-items-center py-2 px-4 mb-4">
            <h5 className="mb-2">{title}</h5>
            {name ? (
                <p className="m-0">{name}</p>
            ) : (
                <div className="d-flex align-items-center text-danger">
                    <img src={exclamation} alt="Exclamation" style={{marginRight: 5}} />
                    <p className="m-0">Volunteer Needed</p>
                </div>
            )}
        </div>
    );
}

VolunteerTile.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default VolunteerTile;
