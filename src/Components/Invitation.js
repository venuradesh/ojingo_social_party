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
    setTimeout(() => setLoaded(true), 5000);
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
    width: 150px;

    img {
      width: 50px;
    }

    .circle {
      transition: all 2s ease;
      animation: loadingCircle 2s ease-in-out infinite alternate;

      @keyframes loadingCircle {
        0% {
          transform: translateX(0px);
        }
        50% {
          transform: translateX(100px);
        }

        100% {
          transform: translateX(50px);
        }
      }
    }

    .triangle {
      animation: loadingTriangle 2s ease infinite alternate;

      @keyframes loadingTriangle {
        0% {
          transform: translateX(0px);
        }
        50% {
          transform: translateX(-50px);
        }

        100% {
          transform: translateX(50px);
        }
      }
    }

    .square {
      animation: loadingSquare 2s ease infinite alternate;

      @keyframes loadingSquare {
        0% {
          transform: translateX(0px);
        }
        50% {
          transform: translateX(-50px);
        }

        100% {
          transform: translateX(-100px);
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
