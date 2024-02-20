import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "../../utils/ApiService";
import {useReducer} from "react";
import {useNavigate} from "react-router-dom";
import "./BookingForm.css"

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())];
function BookingPage() {
    const [
        availableTimes,
        dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) navigate("confirm");
    };
    return (
        <div className={"bookings"}>
            <h1>Table Reservation</h1>
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitData={submitData}/>
        </div>
    );
}

export default BookingPage;