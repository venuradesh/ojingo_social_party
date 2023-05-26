import React, { useEffect, useState } from "react";
import styled from "styled-components";

//invitation
import Site from "../assests/site.jpg";
import Circle from "../assests/circle.png";
import Square from "../assests/square.png";
import Triangle from "../assests/triangle.png";
import Date from "../assests/Layer 5.png";
import Place from "../assests/circle2.png";
import Heading from "../assests/text.png";
import FAS from "../assests/fas.png";
import Background from "../assests/bg2.jpg";

//music
import sound from "../assests/music.mp3";

function Invitation() {
  const [loaded, setLoaded] = useState(false);

  const play = () => {
    new Audio(sound).play();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      play();
    }, 5000);
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
          {
            <div className="card-container">
              <div className="heading">
                <img src={Heading} alt="heading" />
              </div>
              <div className="background">
                <div className="square"></div>
                <div className="circle"></div>
                <img src={Triangle} alt="triangle" className="triangle" />
                <div className="square2"></div>
              </div>
              <div className="content">
                <img src={Date} alt="date" />
                <img src={Place} alt="place" />
              </div>
              <div className="footer">
                <img src={FAS} alt="fas text" />
              </div>
            </div>
          }
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

  .card-container {
    width: 350px;
    height: 600px;
    box-shadow: 0 0 10px 0 #3e3e40;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${Background});
    background-size: contain;
    position: relative;
    overflow: hidden;
    z-index: 0;

    .heading {
      img {
        width: 280px;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      transform-origin: 50% 50%;

      img {
        width: 180px;
      }
    }

    .background {
      img {
        position: absolute;
        width: 300px;
        bottom: 0;
        left: -150px;
        z-index: -1;
      }

      .triangle {
        box-shadow: 0 0 10px 0 var(--shadow);
        transform-origin: 50% 50%;
        animation: moveTriangle 5s ease-in-out infinite alternate;
        animation-delay: 2s;
        transform-origin: 50% 50%;
        transition: all 0.3s ease;

        @keyframes moveTriangle {
          0% {
            transform: rotate(0);
          }

          100% {
            transform: rotate(30deg);
          }
        }
      }

      .square {
        position: absolute;
        width: 130px;
        height: 130px;
        top: 40px;
        left: -30px;
        z-index: -1;
        border: 25px solid var(--pink);
        box-shadow: 0 0 10px 0 var(--shadow);
        transform-origin: 50% 50%;
        animation: moveSqaure1 5s ease-in-out infinite alternate;
        transition: all 0.3s ease;

        @keyframes moveSqaure1 {
          0% {
            transform: rotate(0) translateY(0);
          }

          100% {
            transform: rotate(100deg) translateY(10px);
          }
        }
      }

      .square2 {
        position: absolute;
        width: 130px;
        height: 130px;
        bottom: -40px;
        right: -30px;
        z-index: -1;
        border: 25px solid var(--pink);
        box-shadow: 0 0 10px 0 var(--shadow);
        transform-origin: 50% 50%;
        animation: moveSqaure 5s ease-in-out infinite alternate;
        transition: all 0.3s ease;

        @keyframes moveSqaure {
          0% {
            transform: rotate(0) translateX(0) translateY(0);
          }

          100% {
            transform: rotate(100deg) translateX(-80px) translateY(-10px);
          }
        }
      }

      .circle {
        position: absolute;
        width: 130px;
        height: 130px;
        z-index: -1;
        border: 20px solid var(--pink);
        box-shadow: 0 0 10px 0 var(--shadow);
        top: 180px;
        border-radius: 50%;
        right: -50px;
        animation-delay: 1s;
        transform-origin: center center;
        animation: moveCircle 5s ease-in-out infinite alternate;
        transition: all 0.3s ease;

        @keyframes moveCircle {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-100px);
          }
        }
      }
    }
  }
`;
