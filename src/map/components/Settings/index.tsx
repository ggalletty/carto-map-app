import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../state/store";
import LayerContainer from "./LayerContainer";
import { actions } from "./state";

type Props = StateProps & {};

export const Settings: React.FC<Props> = ({ isOpen, onToggle }) => {
  return (
    <Container isOpen={isOpen}>
      <>
        <Button onClick={onToggle}>⚙️</Button>
        {isOpen && <LayerContainer />}
      </>
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 1000;
  right: 5px;
  top: 5px;
  bottom: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: ${(props) => (props.isOpen && `600px`) || `70px`};
  width: ${(props) => (props.isOpen && `300px`) || `100px`};
  background-color: #f6f6f6;
  padding: ${(props) => (props.isOpen && `20px`) || `10px`};
  transition: all 0.3s ease-out;
`;

const Button = styled.button`
  background-color: transparent;
  margin-bottom: 10px;
`;

const connector = connect(
  (state: RootState) => ({
    isOpen: state.map.settings.isOpen,
    layers: Object.entries(state.map.layer) || [],
  }),
  (dispatch) => ({
    onToggle: () => dispatch(actions.toggle()),
  })
);
type StateProps = ConnectedProps<typeof connector>;

export default connector(Settings);
