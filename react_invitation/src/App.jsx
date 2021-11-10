import styled from "styled-components";

import Contents from "./Pages/Contents";
import Footer from "./Pages/Footer";
import Gallary from "./Pages/Gallary";
import Header from "./Pages/Header";
import Info from "./Pages/Info";
import Map from "./Pages/Map";

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  max-width: 375px;
  margin: 0 30% 0 30%;
  background-color: #fff;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Info />
      <Contents />
      <Gallary />
      <Map />
      <Footer />
    </Wrapper>
  );
}

export default App;
