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
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


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
            <ReservationHeader />
            <div className="reservationContainer">
                <h1 className="reservationTitle">Your Upcoming Trips</h1>
                {
                    reservations && reservations.map((item) => (

                        <Container>
                            <Row><img src={item.reservation.hotelPhoto}></img></Row>
                            <Row>
                                <Col>
                                    <Row>Hotel Name: <b>{item.reservation.hotelName}</b></Row>
                                    <Row>Room No: <b>{item.reservation.roomNum.map(num => (
                                        <b> {num} </b>
                                    ))}</b></Row>
                                    <Row>Start Date: <b>{item.reservation.dateStart.slice(0, 10)}</b></Row>
                                    <Row>End Date: <b>{item.reservation.dateEnd.slice(0, 10)}</b></Row>
                                </Col>
                                <Col>
                                    <OverlayTrigger trigger="click" placement="right" overlay={
                                        <Popover id="popover-basic">
                                            <Popover.Header as="h3">Hotel Info</Popover.Header>
                                            <Popover.Body>
                                                <div>Location : {item.reservation.location}</div>
                                                <div>City : {item.reservation.city}</div>
                                            </Popover.Body>
                                        </Popover>
                                    }>
                                        <Button variant="success">Details</Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        </Container>
                    ))
                }
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Reservation;
