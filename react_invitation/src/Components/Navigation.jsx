import React from "react";
import styled from "styled-components";
import config from "../config";
import tmap from "../Images/tmap.png";
import kakao_map from "../Images/kakaomap.png";
import naver_map from "../Images/naver-map.png";

const NavigationWrapper = styled.div`
  top: 0px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
`;

const ImageIcon = styled.img`
  width: 30px;
  height: auto;
  margin: 0 auto;
`;

const TableData = styled.td`
  line-height: 0.8 !important;
  background-color: #fdfdfd;
  padding: 10px 0px 10px 0px;
  text-align: center;
  width: 20%;
`;

const TableTitle = styled.h1`
  font-size: 12px;
  margin-bottom: 0px;
  line-height: 1.2;
`;

const NaviTable = styled.table`
  margin-bottom: 30px;
  border: 1px solid #fcfcfc;
  border-top: none;
`;

const IconLabel = styled.span`
  font-size: 12px;
  color: black;
`;

function Navigation() {
  return (
    <NavigationWrapper>
      <NaviTable>
        <tr>
          <TableData>
            <TableTitle>오시는 길 안내</TableTitle>
          </TableData>
          <TableData>
            <a
              href={`https://apis.openapi.sk.com/tmap/app/routes?appKey=${config.global.tmapAPIKey}&name=${config.place.name}&lon=${config.place.longitude}&lat=${config.place.latitude}`}
            >
              <ImageIcon src={tmap} alt="tmap" />
              <br />
            </a>
            <IconLabel>티맵</IconLabel>
          </TableData>
          <TableData>
            <a
              href={`https://map.kakao.com/link/map/${config.place.name},${config.place.latitude},${config.place.longitude}`}
            >
              <ImageIcon src={kakao_map} alt="kakaomap" />
            </a>
            <br />
            <IconLabel>카카오맵</IconLabel>
          </TableData>
          <TableData>
            <a
              href={`http://m.map.naver.com/route.nhn?menu=route&ename=${config.place.name}&ex=${config.place.longitude}&ey=${config.place.latitude}&pathType=0&showMap=true`}
            >
              <ImageIcon src={naver_map} alt="navermap" />
            </a>
            <br />
            <IconLabel>네이버지도</IconLabel>
          </TableData>
        </tr>
      </NaviTable>
    </NavigationWrapper>
  );
}

export default Navigation;
