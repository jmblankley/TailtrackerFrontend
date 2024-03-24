import ClassEventTile from "../components/ClassEventTile";
import VolunteerTile from "../components/VolunteerTile";
import '../styles/IndividualEventPage.css'

const IndividualEventPage = () => {
    
    return ( 
        <div className="individualEventPage m-md-5">
            <ClassEventTile
                backgroundColor='#9b30ff'
                length={100} // Pass the calculated length as props
                eventName='Gateway Agility Club'
                className='Novice JWW'
                startTime={new Date(new Date().setHours(8, 0, 0, 0))}
                endTime={new Date(new Date().setHours(10, 30, 0, 0))}
                ringNumber={1}
                entryNum={100}
            />
            <div className="mt-5">
                <h3 className="mb-4">Volunteer Slots</h3>
                {/*name prop will be filled in by database*/}
                <div className="row">
                    <div className="col-md-3">
                        <VolunteerTile title='Scribe' name="Helen Meyer"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Timer" name="Gary Heberlien"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Gate Steward" name="Darlene Schaefer"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Sheet Runner" name="Norm Drabek"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Leash Runner"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Bar Setter"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Bar Setter"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Bar Setter"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Chief Course Builder" name="Erin Day"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Course Builder" name="Kris Jacobs"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Course Builder"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Course Builder"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Course Builder"/>
                    </div>
                    <div className="col-md-3">
                        <VolunteerTile title="Course Builder"/>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default IndividualEventPage;
