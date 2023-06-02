import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//
import Invitation from "./Components/Invitation";
import Home from "./Components/Home";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Invitation />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
