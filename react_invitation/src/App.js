import styled from 'styled-components';

import './App.css';
import Contents from './Pages/Contents';
import Footer from './Pages/Footer';
import Gallary from './Pages/Gallary';
import Header from './Pages/Header';
import Map from './Pages/Map';
import Profile from './Pages/Profile';

const Wrapper = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Header/>
      <Contents/>
      <Profile/>
      <Gallary/>
      <Map/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
