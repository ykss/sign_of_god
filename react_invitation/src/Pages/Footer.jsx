import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>
        © 2021, <a href="https://ykss.netlify.app">ykss</a>, all rights reserved
      </p>
    </FooterWrapper>
  );
}

export default Footer;
