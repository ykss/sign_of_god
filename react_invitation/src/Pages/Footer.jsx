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
      <p>© 2021, ykss, all rights reserved</p>
    </FooterWrapper>
  );
}

export default Footer;
