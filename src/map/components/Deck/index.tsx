import DeckGL from "@deck.gl/react/typed";
import { ReactNode, useMemo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../state/store";
import { actions } from "./state";

type Props = StateProps & {
  children?: ReactNode | undefined;
  layers: any[] | undefined;
};

export const Deck = ({ center, children, layers, zoom }: Props) => {
  const initialViewState = useMemo(
    () => ({
      latitude: center[0],
      longitude: center[1],
      zoom,
    }),
    [center, zoom]
  );

  return (
    <DeckGL
      layers={layers}
      initialViewState={initialViewState}
      controller={true}
      children={children}
    />
  );
};

const connector = connect(
  (state: RootState) => ({
    center: state.map.deck.center,
    isLoading: state.map.deck.isLoading,
    zoom: state.map.deck.zoom,
  }),
  (dispatch) => ({
    onLoad: () => {
      dispatch(actions.onInit({ loading: false, error: null }));
    },
    onError: (error: Error) => {
      console.error(error);
      dispatch(actions.onInit({ loading: false, error: error.message }));
    },
  })
);
type StateProps = ConnectedProps<typeof connector>;

export default connector(Deck);
