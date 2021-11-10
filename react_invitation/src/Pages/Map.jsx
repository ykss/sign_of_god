import React from "react";
import styled from "styled-components";
import KakaoMaps from "../Components/KakaoMaps";
import config from "../config";

const MapInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

function Map() {
  return (
    <>
      <MapInfoWrapper>
        <h2>오시는길</h2>
        <p>{config.place.name}</p>
        <p>{config.place.address}</p>
        <p>문의 : {config.place.contact}</p>
      </MapInfoWrapper>
      <KakaoMaps />
    </>
  );
}

export default Map;
