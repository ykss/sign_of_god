import React from "react";
import styled from "styled-components";
import config from "../config";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const TagTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  background-color: #3c6e7e;
  padding: 2px 10px;
  border-radius: 100px;
  margin: 5px 0 5px 0;
`;

function Info() {
  return (
    <InfoWrapper>
      <TagTitle>일시</TagTitle>
      <h3>{config.date}</h3>
      <TagTitle>장소</TagTitle>
      <h3>{config.place.name}</h3>
    </InfoWrapper>
  );
}

export default Info;
