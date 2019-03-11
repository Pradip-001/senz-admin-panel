import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Senz</h1>
        <p>
          SenZ is a new kind of query language that can be used to communicate
          with IoT devices. It is easily integrable, incredibly fast, and is in
          the highest end of security integration. Also, it is developed live.
          As said earlier SenZ uses a #twitter like messaging syntax which makes
          this language more usable, powerful, and understandable. The
          communication between each of these devices are done via the MySensors
          switch which was developed using Python; a high-end application switch
          which works as a message broker. Once client devices are registered in
          the switch they should share their data to specific people (other
          client devices). Then, they are capable of sharing messages
          accordingly.
        </p>
        <img
          src={
            "https://user-images.githubusercontent.com/2020370/40389831-fbb0b9a8-5e30-11e8-93da-496632d20d12.png"
          }
        />
        <p>
          Currently, the MySensors switch is implemented on two languages: one
          is Python and the other one is Scala. In either case it doesn't matter
          in which language your clients are built on. You can use either of the
          implementations to suit your product. As of now there are two
          implementations which work on the UDP packet connection and TCP packet
          connections.
        </p>
      </div>
    );
  }
}

export default About;
