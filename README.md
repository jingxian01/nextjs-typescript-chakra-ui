# nextjs-typescript-chakra-ui

simple example using leaftlet (react-leaflet) with next.js

installation
```
npm i leaflet leaflet-defaulticon-compatibility leaflet-geosearch react-leaflet

npm i -D @types/leaflet
```

components/Map.tsx
```TypeScript
import { LatLngExpression } from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

const Map: React.FC<MapProps> = () => {

  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
```

index.tsx
```TypeScript
import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

const Index = () => {

  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return (
    <Box m="0 auto" w="70%" height="500px" mt={10}>
      <MapWithNoSSR pos={pos} setPos={setPos} />
    </Box>
  );
};
```
