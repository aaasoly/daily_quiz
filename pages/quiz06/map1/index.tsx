import Head from "next/head";
import { useEffect } from "react";
// import Script from "next/script";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 생성
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=1914a440888b0940d807c8d489453ba2&autoload=false";
    // 쿼리스트링: 객체를 보내고 싶을 때 사용한다. ?key=value&key=value
    document.head.appendChild(script); // head 태그에 자식으로 script 추가

    // script 가 로드가 되면 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.511409854500144, 127.09818803000043), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // map 으로 담아도 되고 안 담아도 됨
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const imageSrc = 'https://cdn-icons-png.flaticon.com/512/1181/1181732.png', // 마커이미지의 주소입니다    
            imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
            imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다

        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
              markerPosition = new window.kakao.maps.LatLng(37.511409854500144, 127.09818803000043)

        const marker = new window.kakao.maps.Marker({ 
          // 지도 중심좌표에 마커를 생성합니다 
          position: map.getCenter() ,
          image: markerImage
      }); 
      // 지도에 마커를 표시합니다
      marker.setMap(map);
      
      // 지도에 클릭 이벤트를 등록합니다
      // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
      window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
          
          // 클릭한 위도, 경도 정보를 가져옵니다 
          const latlng = mouseEvent.latLng; 
          
          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);
          
          const message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
          message += '경도는 ' + latlng.getLng() + ' 입니다';
          
          const resultDiv = document.getElementById('clickLatlng'); 
          resultDiv.innerHTML = message;
          
      })
      })
  }

}, []);

  return (
    <div>
      
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <br/>
      <div style={{ fontSize: "18px" }}>지도를 클릭해보세요</div>
      <div style={{ fontSize: "18px" }} id="clickLatlng"></div>
      
    </div>
  );
}
