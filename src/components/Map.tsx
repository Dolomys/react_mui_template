import { Stack } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const MapStyle = {
  overflow: "hidden",
  position: "relative",
  borderRadius: "20px",
  height: "400px",
  width: "100%",
};

export type Position = {
  lat: number;
  lng: number;
};

const Map = () => {
  return (
    <Stack sx={MapStyle}>
      <MapContainer
        zoomControl={false}
        style={{
          height: "400px",
          width: "100%",
        }}
        center={[43.3, 5.4]}
        zoom={8}
      >
        <TileLayer attribution="Google Maps" url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}" />
      </MapContainer>
    </Stack>
  );
};

export default Map;
