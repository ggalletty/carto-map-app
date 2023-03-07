import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../../state/store";
import { LayerData } from "../../domain/models/layer";
import { actions } from "./state";

export type BaseProps = {
  id: string;
  data: string;
  details: LayerData | undefined;
};

export const BaseLayer = <P extends BaseProps, D extends {}>(
  Layer: new (props: {}) => any,
  mapStateProps: MapDataToLayerProps<D, P> = () => ({}),
  mapDispatchProps: MapDispatchToLayerProps<D, P> = () => ({})
) => {
  return (props: P) => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.map.layer[props.id]);

    useEffect(() => {
      dispatch(actions.updateLayer([props.id, { ...props.details }]));
    }, []);

    const layerProps = useMemo(
      () => ({
        ...props,
        ...mapStateProps(data, props),
        ...mapDispatchProps(dispatch, data, props),
      }),
      [data, dispatch]
    );

    return new Layer({
      ...layerProps,
    });
  };
};

type MapDataToLayerProps<D, P> = (
  data: LayerData | undefined,
  props: P
) => Partial<D>;
type MapDispatchToLayerProps<D, P> = (
  dispatch: Dispatch,
  data: LayerData | undefined,
  props: P
) => Partial<D> & { [key: string]: (...args: any[]) => void };
