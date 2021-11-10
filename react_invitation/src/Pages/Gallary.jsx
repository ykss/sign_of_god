import React from "react";
import styled from "styled-components";

const BookImage = styled.img`
  width: 100%;
`;

const GallaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Gallary() {
  return (
    <GallaryWrapper>
      <BookImage alt="book" src="/book.png" />
    </GallaryWrapper>
  );
}

export default Gallary;
