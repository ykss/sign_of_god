import React from "react";
import styled from "styled-components";

import config from "../config";

const HeaderWrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0 10px 0;
`;

const Title = styled.h2`
  padding: 20px 0 20px 0;
`;

const MainImage = styled.img`
  width: 80%;
  margin: 30px 0 30px 0;
`;

function Header() {
  return (
    <HeaderWrapper>
      <MainImage alt="main" src="./main.jpg" />
      <Title>{config.title}</Title>
    </HeaderWrapper>
  );
}

export default Header;
