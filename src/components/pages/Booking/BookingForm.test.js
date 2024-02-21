import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking form', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('should correctly render all fields and their default values', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} />
        );

        const dateInput = screen.getByLabelText(/Date/);
        const timeSelect = screen.getByLabelText(/Time/);
        const timeOptions = await screen.findAllByTestId('booking-time-option');
        const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
        const occasionSelect = screen.getByLabelText(/Occasion/);
        const occasionOptions = await screen.findAllByTestId(`booking-occasion-option`);
        const submitButton = screen.getByRole('button');

        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'booking-date');
        expect(dateInput).toHaveValue(today);

        expect(timeSelect).toBeInTheDocument();
        expect(timeSelect).toHaveAttribute('id', 'booking-time');
        expect(timeOptions.length).toBe(2);

        expect(numberOfGuestsInput).toBeInTheDocument();
        expect(numberOfGuestsInput).toHaveAttribute('id', 'booking-number-guests');
        expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
        expect(numberOfGuestsInput).toHaveValue(1);

        expect(occasionSelect).toBeInTheDocument();
        expect(occasionSelect).toHaveAttribute('id', 'booking-occasion');
        expect(occasionOptions.length).toBe(2);

        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toBeEnabled();
    });

    test('should successfully submit form with default values', () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} />
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(submitData).toHaveBeenCalledWith({
            date: today,
            time: availableTimes[0],
            guests: "1",
            occasion: 'Birthday',
        });
    });

    test(
        `should display an error message and disable sumbit button when date 
    field's value is empty`, () => {
            render(
                <BookingForm
                    availableTimes={availableTimes}
                    dispatchOnDateChange={dispatchOnDateChange}
                    submitData={submitData}
                />
            );

            const dateInput = screen.getByLabelText(/Date/);
            fireEvent.change(dateInput, { target: { value: '' } });
            fireEvent.blur(dateInput);
            const errorMessages = screen.getAllByTestId('error-message');
            const submitButton = screen.getByRole('button');
            const firstErrorMessage = errorMessages[0];
            expect(firstErrorMessage).toBeInTheDocument();
            expect(firstErrorMessage).toHaveTextContent('Please choose a valid date');
            expect(submitButton).toBeDisabled();
        });

    test(
        `should display an error message and disable sumbit button when number of  
    guests field's value is empty`, () => {
            render(
                <BookingForm
                    availableTimes={availableTimes}
                    dispatchOnDateChange={dispatchOnDateChange}
                    submitData={submitData}
                />
            );

            const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
            fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
            fireEvent.blur(numberOfGuestsInput);
            const errorMessages = screen.getAllByTestId('error-message');
            const submitButton = screen.getByRole('button');
            const numberErrorMessage = errorMessages[0];
            expect(numberErrorMessage).toBeInTheDocument();
            expect(numberErrorMessage).toHaveTextContent('Please enter a number between 1 and 10');
            expect(submitButton).toBeDisabled();
        });
});
