import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import ReservationHeader from "../../components/reservationHeader/reservationHeader";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./Reservation.css";

const Reservation = () => {
  console.log('this is the reservation page')
  return (
    <div>
      <Navbar />
      <ReservationHeader/>
      <div className="reservationContainer">
        {/* <Featured/> */}
        <h1 className="reservationTitle">Your Upcoming Trips</h1>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Reservation;
