import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invitation from "./Components/Invitation";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Invitation />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
