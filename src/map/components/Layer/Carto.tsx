import {
  CartoLayer as Carto,
  setDefaultCredentials,
} from "@deck.gl/carto/typed";
import { MapType } from "@deck.gl/carto/typed/api/maps-api-common";
import { BaseLayer, BaseProps } from "./Base";
import { actions } from "./state";
import { hex2Rgba } from "./utils";

type Props = BaseProps & {
  type: MapType;
  connection: "bigquery" | "carto" | "carto_dw";
};

type CartoProps = {
  getFillColor: number[];
  getLineColor: number[];
  lineWidthMinPixels: number;
  opacity: number;
  pointRadiusMinPixels: number;
  visible: boolean;
};

setDefaultCredentials({
  apiBaseUrl: import.meta.env.VITE_CARTO_BASE_URL,
  accessToken: import.meta.env.VITE_CARTO_ACCESS_TOKEN,
});

export default BaseLayer<Props, CartoProps>(
  Carto,
  (data) => ({
    visible: data?.visible ?? true,
    opacity: data?.opacity ?? 1,
    getLineColor: hex2Rgba(data?.stroke) ?? [238, 77, 90],
    getFillColor: hex2Rgba(data?.fill) ?? [0, 0, 0],
    pointRadiusMinPixels: data?.pointSize ?? 2,
    lineWidthMinPixels: data?.strokeSize ?? 1,
  }),
  (dispatch, _, { id }) => ({
    onDataLoad: () => dispatch(actions.onLoad([id, true])),
  })
);
