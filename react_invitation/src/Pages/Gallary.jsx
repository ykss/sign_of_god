import React from "react";
import styled from "styled-components";
import book from "../Images/halfbook.png";

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
      <BookImage alt="book" src={book} />
    </GallaryWrapper>
  );
}

export default Gallary;
