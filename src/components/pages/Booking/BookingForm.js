import FormField from "../../utils/FormField";
import {useState} from "react";

function BookingForm() {
    const [bookingData, setBookingData] = useState({
        date:"",
        time:"",
        guests:"",
        occasion:""
    });
    const occasions = ['Birthday', 'Anniversary'];
    const datetime = new Date();
    const handleChangeDate = (e) =>{
        setBookingData(bookingData=>{
            return {...bookingData,date:e.target.value}
        })
    }
    const handleChangeTime = (e) =>{
        setBookingData(bookingData=>{
            return {...bookingData,time:e.target.value}
        })
    }
    const handleChangeGuests = (e) =>{
        setBookingData(bookingData=>{
            return {...bookingData,guests:e.target.value}
        })
    }
    const handleChangeType = (e) =>{
        setBookingData(bookingData=>{
            return {...bookingData,occasion:e.target.value}
        })
    }
    return (
        <form>
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
                <input
                    id="booking-time"
                    name="booking-time"
                    type="time"
                    min={datetime.getTime()}
                    required
                    value={bookingData.time}
                    onChange={handleChangeTime}
                />
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
        </form>
    );
}

export default BookingForm;