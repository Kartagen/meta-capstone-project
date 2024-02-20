import FormField from "../../utils/FormField";
import {useEffect, useState} from "react";

function BookingForm({availableTimes, dispatchOnDateChange, submitData}) {
    const [bookingData, setBookingData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    });
    const isDateValid = () => bookingData.date !== '';
    const isTimeValid = () => bookingData.time !== '';
    const isNumberOfGuestsValid = () => bookingData.guests !== '';
    const isOccasionValid = () => bookingData.occasion !== '';
    const areAllFieldsValid = () =>
        isDateValid()
        && isTimeValid()
        && isNumberOfGuestsValid()
        && isOccasionValid();
    useEffect(()=>{
        console.log(availableTimes)
    })
    const occasions = ['Birthday', 'Anniversary'];
    const datetime = new Date();
    const handleChangeDate = (e) => {
        setBookingData({...bookingData, date: e.target.value})
        dispatchOnDateChange(e.target.value)
    }
    const handleChangeTime = (e) => {
        setBookingData({...bookingData, time: e.target.value})
    }
    const handleChangeGuests = (e) => {
        setBookingData({...bookingData, guests: e.target.value})
    }
    const handleChangeType = (e) => {
        setBookingData( {...bookingData, occasion: e.target.value})
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        submitData(bookingData);
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <FormField
                label="Date of reservation"
                htmlFor={"booking-date"}

            >
                <input
                    id="booking-date"
                    name="booking-date"
                    type="date"
                    min={datetime.getDate()}
                    required
                    value={bookingData.date}
                    onChange={handleChangeDate}
                />
            </FormField>
            <FormField
                label="Time of reservation"
                htmlFor={"booking-time"}

            >
                <select
                    id="booking-time"
                    name="booking-time"
                    required
                    value={bookingData.time}
                    onChange={handleChangeTime}
                >
                    {availableTimes.map((time)=>
                        <option key={time}>{time}</option>
                    )}
                </select>
            </FormField>
            <FormField
                label="Number of guests"
                htmlFor={"booking-guests"}

            >
                <input
                    id="booking-guests"
                    name="booking-guests"
                    type="number"
                    min={0}
                    max={10}
                    required
                    value={bookingData.guests}
                    onChange={handleChangeGuests}
                />
            </FormField>
            <FormField
                label="Occasion type"
                htmlFor={"booking-occasion"}

            >
                <select
                    id="booking-occasion"
                    name="booking-occasion"
                    value={bookingData.occasion}
                    onChange={handleChangeType}
                >
                    {occasions.map(occasion =>
                        <option data-testid="booking-occasion-option" key={occasion}>
                            {occasion}
                        </option>
                    )}
                </select>
            </FormField>
            <button
                className="btn"
                type="submit"
                disabled={!areAllFieldsValid()}
            >
                Make the reservation
            </button>
        </form>
    );
}

export default BookingForm;