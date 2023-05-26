import React from "react";
import styled from "styled-components";

//invitation
import Site from "../assests/site.jpg";

function Invitation() {
  return (
    <Container>
      <div className="invitation">
        <img src={Site} alt="invitation" />
      </div>
    </Container>
  );
}

export default Invitation;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  .invitation {
    img {
      width: 350px;
    }

    @media only screen and (max-width: 380px) {
      img {
        width: 300px;
      }
    }
  }
`;
