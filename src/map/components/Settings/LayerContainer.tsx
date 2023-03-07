import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../state/store";
import LayerRow from "./LayerRow";

type Props = StateProps & {};

const LayerContainer: React.FC<Props> = ({ layers }) => {
  return (
    <Container>
      {layers.map(([id, data]) => (
        <LayerRow key={id} id={id} {...data} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const connector = connect(
  (state: RootState) => ({
    layers: Object.entries(state.map.layer) || [],
  }),
  undefined
);
type StateProps = ConnectedProps<typeof connector>;

export default connector(LayerContainer);
