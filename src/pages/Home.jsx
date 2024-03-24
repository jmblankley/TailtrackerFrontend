import Calendar from 'react-calendar';
import UpcomingEventTile from '../components/UpcomingEventTile';
import '../styles/Home.css'
import { supabase } from '../supabaseClient'
import { useState, useEffect } from 'react';

const Home = () => {
	const [events, setEvents] = useState([]); // array of OverallEvent objects

	useEffect(() => {
		getEvents();
	}, [])

	// function to get all events from the OverallEvent table
	async function getEvents() {
		try {
			const { data, error } = await supabase.from("OverallEvent").select("*");
			if (error) {
				console.error('Error fetching events:', error.message);
			} else {
				// Set the events state with the data array
				setEvents(data);
			}
		} catch (error) {
			console.error('Error fetching events:', error.message);
		}
	}
	
	console.log(events);

	return (  
		<div className="homePage container-fluid d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly align-items-center">
			<div className='Calendar'>
				<Calendar/>
			</div>
			<div className="upcomingEvents">
				<h4 className='text-black fw-bolder mb-4'>Upcoming Events</h4>
				{events.map((event, index) => {
                    // Format the date to mm/dd/yyyy
                    const eventDate = new Date(event.Date);
                    const formattedDate = `${eventDate.getMonth() + 1}/${eventDate.getDate()}/${eventDate.getFullYear()}`;

					// Format the time to hh:mm ap
					const eventTime = new Date(event.Time);
					const formattedTime = eventTime.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }); // not working right now

                    return (
                        <UpcomingEventTile 
                            key={index} 
                            eventName={event.EventName}
                            date={formattedDate}
							time={event.Time}
                            backgroundColor={['#ff8a00', '#9b30ff', '#3CB371', '#0d98ba'][index % 4]} // cycling through 4 colors
                        />
                    );
                })}
			</div>
		</div>
	);
}
 
export default Home;