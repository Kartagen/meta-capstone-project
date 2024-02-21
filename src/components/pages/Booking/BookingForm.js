import FormField from "../../utils/FormField";
import {useEffect, useState} from "react";

function BookingForm({availableTimes, dispatchOnDateChange, submitData}) {
    const datetime = new Date().toISOString().split('T')[0];
    const [bookingData, setBookingData] = useState({
        date: datetime,
        time: availableTimes[0],
        guests: "1",
        occasion: 'Birthday'
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
    const occasions = ['Birthday', 'Anniversary'];
    const errors = ['Please choose a valid date', 'Please choose a valid time','Please enter a number between 1 and 10','Please choose a valid occasion'];
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
                hasError={!isDateValid()}
                errorMessage={errors[0]}
            >
                <input
                    id="booking-date"
                    name="booking-date"
                    type="date"
                    min={datetime}
                    required
                    value={bookingData.date}
                    onChange={handleChangeDate}
                />
            </FormField>
            <FormField
                label="Time of reservation"
                htmlFor={"booking-time"}
                hasError={!isTimeValid()}
                errorMessage={errors[1]}
            >
                <select
                    id="booking-time"
                    name="booking-time"
                    required
                    value={bookingData.time}
                    onChange={handleChangeTime}
                >
                    {availableTimes.map((time)=>
                        <option data-testid="booking-time-option" key={time}>{time}</option>
                    )}
                </select>
            </FormField>
            <FormField
                label="Number of guests"
                htmlFor="booking-number-guests"
                hasError={!isNumberOfGuestsValid()}
                errorMessage={errors[2]}
            >
                <input
                    id="booking-number-guests"
                    name="booking-number-guests"
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
                hasError={!isOccasionValid()}
                errorMessage={errors[3]}
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