import { useState } from "react";
import Calendar from "react-calendar";
import DaySchedule from "../components/DaySchedule";
import '../styles/EventPage.css'

const EventPage = () => {
  const [date, setDate] = useState(new Date());
  const [activeRing, setActiveRing] = useState(1); // State to track the active ring
  

  // helper function to setup the weekly calendar
  const getStartOfWeek = (date) => {
    const currentDate = new Date(date);
    const currentDayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diff = currentDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1); // Adjust when current day is Sunday
    return new Date(currentDate.setDate(diff));
  };

  const startOfWeek = getStartOfWeek(new Date());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6); // Assuming Sunday is the end of the week

  return (
    <div className="eventPage m-md-5">
      <div className="d-flex flex-column justify-content-center">
        <div className="mb-md-5">
          <h1 className="fw-bolder mb-3">Gateway Agility</h1>
          <Calendar
            onChange={setDate}
            value={date}
            activeStartDate={startOfWeek}
            minDate={startOfWeek}
            maxDate={endOfWeek}
          />
          <div className="ringButtons mt-4">
            {/* Toggle buttons for rings */}
            <button
              className={activeRing === 1 ? "px-4 py-3 activeButton" : "px-4 py-3 inactiveButton"}
              onClick={() => setActiveRing(1)}
            >
              Ring #1
            </button>
            <button
              className={activeRing === 2 ? "px-4 py-3 activeButton" : "px-4 py-3 inactiveButton"}
              onClick={() => setActiveRing(2)}
            >
              Ring #2
            </button>
          </div>
        </div>
        {/* Render DaySchedule component with active ring */}
        <DaySchedule activeRing={activeRing} />
      </div>
    </div>
  );
};

export default EventPage;
