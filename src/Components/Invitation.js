import React, { useEffect, useState } from "react";
import styled from "styled-components";

//invitation
import Site from "../assests/site.jpg";
import Circle from "../assests/circle.png";
import Square from "../assests/square.png";
import Triangle from "../assests/triangle.png";

function Invitation() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  }, []);

  return (
    <Container>
      {!loaded ? (
        <div className="loading-screen">
          <img src={Circle} alt="circle" className="circle" />
          <img src={Triangle} alt="triangle" className="triangle" />
          <img src={Square} alt="square" className="square" />
        </div>
      ) : (
        <div className="invitation">
          <img src={Site} alt="invitation" />
        </div>
      )}
    </Container>
  );
}

export default Invitation;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      width: 50px;
    }

    .circle {
      animation: loadingCircle 2s ease infinite;

      @keyframes loadingCircle {
        0% {
          order: 1;
        }
        50% {
          order: 3;
        }

        100% {
          order: 2;
        }
      }
    }

    .triangle {
      animation: loadingTriangle 2s ease infinite;

      @keyframes loadingTriangle {
        0% {
          order: 2;
        }
        50% {
          order: 1;
        }

        100% {
          order: 3;
        }
      }
    }

    .square {
      animation: loadingSquare 2s ease infinite;

      @keyframes loadingSquare {
        0% {
          order: 3;
        }
        50% {
          order: 2;
        }

        100% {
          order: 1;
        }
      }
    }
  }

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
