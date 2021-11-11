import React from "react";
import styled from "styled-components";
import KakaoMaps from "../Components/KakaoMaps";
import Navigation from "../Components/Navigation";
import config from "../config";

const MapInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const RouteInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PointParagraph = styled.div`
  color: red;
  margin-top: 0;
`;

const Typo = styled.p`
  line-height: 30px;
  text-align: justify;
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
      <Navigation />
      <RouteInfo>
        <Typo>
          <b>-자가 이용시:</b> 교회 주차장 이용 가능
        </Typo>
        <PointParagraph>
          (가급적 대중교통을 이용해주시기 바랍니다)
        </PointParagraph>
        <Typo>
          <b>-버스 이용시:</b>시내버스 1213, 2013(서일대 정류장), <br />
          마을버스 중랑02 (새마을금고 정류장)
        </Typo>
        <Typo>
          <b>-지하철 이용시:</b> 7호선 면목역 2번 출구 &gt; 버스 이용
        </Typo>
      </RouteInfo>
    </>
  );
}

export default Map;
