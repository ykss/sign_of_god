import React from "react";
import styled from "styled-components";

const BookImage = styled.img`
  width: 80%;
`;

const GallaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

function Gallary() {
  return (
    <GallaryWrapper>
      <BookImage alt="book" src="./halfbook.png" />
    </GallaryWrapper>
  );
}

export default Gallary;
