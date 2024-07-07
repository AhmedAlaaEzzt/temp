import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import {
  ArcgisBasemapGallery,
  ArcgisBasemapToggle,
  ArcgisCoordinateConversion,
  ArcgisExpand,
  ArcgisMap,
  ArcgisSearch,
  ArcgisZoom,
} from "@arcgis/map-components-react";
import "./App.css";
import { useEffect, useState } from "react";
import useGetPoints from "./hooks/getPoints";

function App() {
  const [map] = useState<__esri.Map>(new Map({ basemap: "hybrid" }));
  const { points } = useGetPoints();
  useEffect(() => {
    if (points?.length && map) {
      const graphicLayer = new GraphicsLayer({
        title: "test",
      });

      points?.forEach((p: { longitude: number; latitude: number }) => {
        const point = new Point({
          longitude: p.longitude,
          latitude: p.latitude,
        });

        const graphic = new Graphic({
          geometry: point,
        });

        graphicLayer.add(graphic);
      });

      map.add(graphicLayer);
    }
  }, [points, map]);

  return (
    <ArcgisMap map={map}>
      <ArcgisExpand position="top-right">
        <ArcgisSearch />
      </ArcgisExpand>

      <ArcgisBasemapToggle position="bottom-right" nextBasemap={"osm"} />

      <ArcgisExpand position="top-left">
        <ArcgisBasemapGallery />
      </ArcgisExpand>

      {/* <ArcgisExpand position="top-left">
      <ArcgisLayerList/>
      </ArcgisExpand> */}
      <ArcgisZoom position="top-right" />

      <ArcgisCoordinateConversion position="bottom-left" />
    </ArcgisMap>
  );
}

export default App;
