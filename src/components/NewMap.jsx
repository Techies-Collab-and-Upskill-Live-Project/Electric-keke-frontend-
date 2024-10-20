import React, { useEffect, useRef, useState } from "react";
import tt from "@tomtom-international/web-sdk-maps";

const NewMap = ({ styling = "w-full h-full" }) => {
  const mapElement = useRef();

  const [mapLongitude, setMapLongitude] = useState(3.39);
  const [mapLatitude, setMapLatitude] = useState(6.44);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude, position.coords.longitude);
          setMapLatitude(position.coords.latitude);
          setMapLongitude(position.coords.longitude);
        },
        (error) => console.log(error)
      );
    }

    let map = tt.map({
      key: "zO6zBRyYAZf1jRma2b270iyfO2Cm4Ov6",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);
    return () => map.remove();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      alert('jose')
      setMapLatitude(-121);
          setMapLongitude(2.33);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [])

  return <div ref={mapElement} className={styling}></div>;
};

export default NewMap;
