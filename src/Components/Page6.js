import React, { useEffect, useState } from "react";
import styled from "styled-components";

//invitation
import Man from "../assests/man-square.png";
import Circle from "../assests/circle.png";
import Square from "../assests/square.png";
import Triangle from "../assests/triangle.png";
import Heading from "../assests/Square-heading.png";
import FAS from "../assests/fas.png";
import CircleText from "../assests/page-3-heading.png";
import Hint from "../assests/square-text-hint.png";
import NormalText from "../assests/normalTextCircle.png";
import Close from "../assests/close.png";

//music
import sound from "../assests/music.mp3";
import { useNavigate } from "react-router-dom";

function Page6() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  const play = () => {
    new Audio(sound).play();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
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
                <img src={Man} alt="man" />
              </div>
              {/* <div className="content">
                <img src={Date} alt="date" />
                <img src={Place} alt="place" />
              </div>*/}
              <div className="button-container">
                <div className="btn-text">
                  <img src={Hint} alt="button Text" className="hint-text" />
                  <img src={NormalText} alt="desc" className="desc" />
                </div>
                <div className="close">
                  <img src={Close} alt="close-btn" onClick={() => navigate("/home")} />
                </div>
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

export default Page6;

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
    background-color: var(--page3-color);
    background-size: contain;
    position: relative;
    overflow: hidden;
    z-index: 0;

    .heading {
      position: relative;
      /* top: 30px; */

      img {
        width: 150px;
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
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: -1;
      }
    }

    .button-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .close {
        cursor: pointer;

        img {
          width: 100px;
          position: relative;
          top: -35px;
        }
      }

      .btn-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 30px;
        justify-content: center;

        img {
          width: 150px;
          position: relative;

          &.desc {
            width: 100%;
            top: -30px;
          }

          &.hint-text {
            top: -20px;
          }
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          top: -20px;
          width: 100%;
          transform: scale(0.9);

          img {
            cursor: pointer;
            width: 100px;

            &.btn-inactive {
              cursor: none;
              pointer-events: none;
              opacity: 0.7;
            }
          }
        }

        .help {
          position: relative;
          top: -20px;

          .text {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .help-btn {
              width: 80px;
              cursor: pointer;
            }

            img {
              width: 200px;
            }
          }
        }
      }
    }

    .footer {
      position: absolute;
      bottom: -20px;
    }
  }
`;
