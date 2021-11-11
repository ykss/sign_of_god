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
        결실의 계절 가을이 깊어 갑니다. <br />
        저의 오늘이 있기까지 육십 여년을 인도하신
        <br /> 하나님의 은혜에 감사와 영광을 돌리고, <br />
        많은 분들의 사랑에 <br />
        감사하는 마음으로 책을 내었습니다. <br />이 행복한 자리에 존경하는
        분들을 모시고
        <br /> 함께 기쁨을 나누고 싶습니다. <br />
        정중한 마음으로 모시고자하오니, <br />
        부디 오셔서 자리를 빛내 주시기 바랍니다.
      </Typography>
    </ContentsWrapper>
  );
}

export default Contents;
