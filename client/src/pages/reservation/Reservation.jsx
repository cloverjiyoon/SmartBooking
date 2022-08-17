import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import ReservationHeader from "../../components/reservationHeader/reservationHeader";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./Reservation.css";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useContext, useEffect, useState } from "react";


const Reservation = () => {
  const { user } = useContext(AuthContext);
  console.log(user._id);
  // const user = {
  //   "_id": "62fb0265e543089d3a8de392"
  // };
  const { data, loading, error } = useFetch(`/users/${user._id}`);
  const [reservations, setReservations] = useState([]);


  useEffect(() => {
    setReservations(data.reservations);
  }, [data.reservations]);
  console.log("userinf", reservations);

  return (
    <div>
      <Navbar />
      <ReservationHeader/>
      <div className="reservationContainer">
        {/* <Featured/> */}
        <h1 className="reservationTitle">Your Upcoming Trips</h1>
        {
          reservations && reservations.map((item) => (
            <div>
              <div>Hotel Name: <b>{item.reservation.hotelId}</b></div>
              <div>Room No: <b>{item.reservation.roomNum.map(num => (
                <b> { num } </b>
              ))}</b></div>
              <div>Start Date: <b>{item.reservation.dateStart}</b></div>
              <div>End Date: <b>{item.reservation.dateEnd}</b></div>
            </div>

          ))
        }
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Reservation;
