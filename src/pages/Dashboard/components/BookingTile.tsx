import Card from "../../../components/global/Card/Card"
import { useAppSelector } from "../../../store/hooks"
import { IBooking } from "../../../types/Bookings"

const BookingTile = () => {
  const bookings = useAppSelector((state) => state.bookings.bookings)
  return (
    <div>
      <Card cardTitle="Next 5 Bookings"
        width="w-full"
      >
        <ul>
          {bookings && bookings.map((booking: IBooking, bookingIndex: number) => {
            return (
              <li key={`dash-booking-${bookingIndex}`}>{booking.clientName}</li>
            )
          })}
        </ul>
      </Card>
    </div>
  )
}

export default BookingTile