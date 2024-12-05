// components/kakao-map.tsx
import { useEffect } from "react";

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  placeName: string;
}

const KakaoMap = ({ latitude, longitude, placeName }: KakaoMapProps) => {
  useEffect(() => {
    // 카카오맵 API가 로드되었을 때 실행
    if (window.kakao && window.kakao.maps) {
      const { kakao } = window;

      // 지도 컨테이너 생성
      const mapContainer = document.getElementById("kakao-map");
      const mapOptions = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3, // 줌 레벨 조정
      };

      // 지도 생성
      const map = new kakao.maps.Map(mapContainer, mapOptions);

      // 마커 추가
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      // 인포윈도우 추가
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">${placeName}</div>`,
      });
      infowindow.open(map, marker);
    }
  }, [latitude, longitude, placeName]);

  return <div id="kakao-map" style={{ width: "100%", height: "500px" }}></div>;
};

export default KakaoMap;
