import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { HomeCard,LoginBtn } from "./Home.styles";
function Card({ role, src, link }) {
  const history = useHistory();
  return (
    <HomeCard>
      <img width="100%" height="100%s" src={src} alt="Admin" />
      <h1>{role.toUpperCase()}</h1>
      <LoginBtn><Button  onClick={() => history.push("/login", role)}>Log In</Button></LoginBtn>
    </HomeCard>
  );
}

export default Card;

