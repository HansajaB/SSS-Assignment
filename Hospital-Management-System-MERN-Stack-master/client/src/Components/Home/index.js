import React from "react";
import admin from "../../assets/admin.png";
import patient from "../../assets/patient.jpg";
import doctor from "../../assets/doctor_new.png";
import Card from "./Cards";
import { HomeBody, HomeContainer, HomeItem,HomeText } from "./Home.styles";
function Home() {
  return (
    <>
      <HomeContainer style={{}}>
        <HomeText
          style={{
            flex: "1",
            position: "absolute",
            color: "white"
          }}
        >
          <p class="">Ninewales Hospital</p>
        </HomeText>
        <HomeItem
          style={{
            paddingTop: "10px",
            flex: "1",
            textAlign: "right",
          }}
        ></HomeItem>
      </HomeContainer>
      <HomeBody>
        <Card role="admin" src={admin} link="/adminLogin" />
        <Card role="doctor" src={doctor} link="/doctor" />
        <Card role="patient" src={patient} link="patientLogin" />
      </HomeBody>
    </>
  );
}

export default Home;
