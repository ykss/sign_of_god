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

const BookName = styled.h1`
  padding: 20px 0 20px 0;
`;

const MainImage = styled.img`
  width: 80%;
  margin: 30px 0 30px 0;
`;

const Typography = styled.p`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <MainImage alt="main" src="/main.jpg" />
      <Title>{config.title}</Title>
      <BookName>{config.book}</BookName>
      <Typography>
        유영창 장로의 자서전인 "하나님의 사인" 출판을 기념하여 여러분을 예배의
        자리에 초대합니다. 예배의 자리에서 유영창 장로의 삶에서 함께해주셨던
        하나님을 함께 예배하길 원합니다.
      </Typography>
    </HeaderWrapper>
  );
}

export default Header;
