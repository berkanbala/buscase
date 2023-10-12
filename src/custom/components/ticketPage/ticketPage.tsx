"use client";
import React, { useState } from "react";
import styles from "./ticketPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const TicketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state: any) => state.details);
  const buses = useSelector((state: any) => state.buses);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const toggleSeat = (e: any) => {
    const seatNo = e.target.id;
    if (selectedSeats.includes(seatNo)) {
      const index = selectedSeats.indexOf(seatNo);
      selectedSeats.splice(index, 1);
    } else {
      selectedSeats.push(e.target.id);
    }
    console.log(selectedSeats);
  };

  const proceedToPassengerDetails = (e: any) => {
    dispatch({ type: "SEAT_SELECTION", seats: selectedSeats });
    navigate("/ticketPay");
  };
  const selectedBus =
    buses.find((bus: any) => bus.id === details.selectedBusId) || {};
  console.log(selectedBus);
  return (
    <div className={styles.seatContainer}>
      The selected bus name is {selectedBus.name}
      <div className={styles.seatContent}>
        {selectedBus.seats.map((seat: any, index: any) => {
          return (
            <div key={index} className="">
              <input
                className={styles.seat}
                disabled={seat.isBooked}
                onClick={toggleSeat}
                type="checkbox"
                id={seat.no}
              />
              <label htmlFor={seat.no}>{seat.no}</label>
            </div>
          );
        })}
      </div>
      <button className={styles.proceed} onClick={proceedToPassengerDetails}>
        Proceed
      </button>
    </div>
  );
};
