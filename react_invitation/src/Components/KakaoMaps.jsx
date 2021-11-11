import React, { useEffect } from "react";
import config from "../config";

const { kakao } = window;

function KakaoMaps() {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(
        config.place.latitude,
        config.place.longitude
      ),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      config.place.latitude,
      config.place.longitude
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent = `<span style="    
    display: block;
    color:black;
    text-align: center;
    height: 24px;
    line-height:22px;
    border-radius:4px;
    padding:5px 10px;
    width:200px;
    font-weight:bold;
    font-size:10px">${config.place.address}</span>`;
    var iwPosition = new kakao.maps.LatLng(
      config.place.latitude,
      config.place.longitude
    ); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "350px",
        height: "350px",
      }}
    ></div>
  );
}

export default KakaoMaps;
