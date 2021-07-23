import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Ticket = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="ticket-area ptb-100">
            <div className="container">
                <div className="ticket-item">
                    <div className="section-title two">
                        <h2>Book A <span>Ticket</span> Of The Next Exciting Exhibition</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua.</p>
                    </div>

                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control" />
                        </div>
                        <button type="submit" className="btn common-btn two">Book Ticket</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Ticket;