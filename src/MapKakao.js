import * as React from "react";
const { kakao } = window;

const MapContainer = (props) => {
  React.useEffect(() => {
    const address = props.record?props.record["세부주소"]:"서울특별시"
    const container = document.getElementById("myMap");
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const options = {
          center: new kakao.maps.LatLng(result[0].y, result[0].x),
          level: 7
        };
        const map = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({
            position: options.center
        });
        // marker.setMap(map);
        const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>`
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(options.center);


      }
    };
    setTimeout(geocoder.addressSearch(address, callback),1500)
  });
  return (
    <div
      id="myMap"
      style={{
        width: "100%",
        height: "300px"
      }}
    ></div>
  );
};
MapContainer.defaultProps = { label: 'Map' };
export default MapContainer
