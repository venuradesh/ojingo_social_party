import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//
import Invitation from "./Components/Invitation";
import Home from "./Components/Home";
import Page3 from "./Components/Page3";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Invitation />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/circle" element={<Page3 />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
