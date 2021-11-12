import React from "react";
import styled from "styled-components";

const Typography = styled.p`
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 30px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

function Contents() {
  return (
    <ContentsWrapper>
      <h2>모시는 글</h2>
      <Typography>
        성탄이 어느덧 가까이 왔습니다. <br />
        우리 주님의 평안이 함께 하시길빕니다. <br />한 밤에 들판에서 밤새워 양을
        치던
        <br />
        목동들에게 천사들이 가장 먼저 <br />
        성탄의 기쁜 소식을 알려준 것처럼, <br />제 육십여년 삶의 들판에서도
        <br /> 순간마다 고비마다 보내주셨던 <br />
        <b>'하나님의 사인(Sign)'</b>이 있었습니다. <br />
        그때마다 놀랍기도, 두렵기도 했습니다. <br />그 고백들이 이번에 책 한
        권이 되었습니다. <br />
        감사할 뿐이지만 그냥 지나치기 아쉬워 <br />
        출판 기념회에 정중하게 초대합니다.
        <br />
        <br /> 2021년 주님오심을 기다리며
        <br />
        유영창 드림
      </Typography>
    </ContentsWrapper>
  );
}

export default Contents;
