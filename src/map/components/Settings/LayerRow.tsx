import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { LayerData } from "../../domain/models/layer";
import { actions } from "./state";

type Props = LayerData & { id: string };

const LayerRow: React.FC<Props & StateProps> = ({
  changeProp,
  fill,
  label,
  pointSize,
  stroke,
  strokeSize,
  type,
}) => {
  return (
    <Container>
      <Details>
        <legend>{label}</legend>
        <Group>
          <label htmlFor="fillColor">Fill color</label>
          <input
            type="color"
            id="fillColor"
            name="fillColor"
            defaultValue={fill}
            onBlur={(evt) => changeProp({ fill: evt.target.value })}
          />
        </Group>
        {type === "carto" && (
          <>
            <Group>
              <label htmlFor="radius">Radius</label>
              <input
                type="range"
                defaultValue={pointSize || 1}
                id="radius"
                name="radius"
                min="1"
                max="20"
                onMouseUp={(evt) =>
                  changeProp({
                    pointSize: parseInt((evt.target as HTMLInputElement).value),
                  })
                }
              />
            </Group>
            <Group>
              <label htmlFor="strokeColor">Outline color</label>
              <input
                type="color"
                id="strokeColor"
                name="strokeColor"
                defaultValue={stroke}
                onBlur={(evt) => changeProp({ stroke: evt.target.value })}
              />
            </Group>
            <Group>
              <label htmlFor="radius">Outline size</label>
              <input
                type="range"
                defaultValue={strokeSize || 1}
                id="radius"
                name="radius"
                min="1"
                max="20"
                onMouseUp={(evt) =>
                  changeProp({
                    strokeSize: parseInt(
                      (evt.target as HTMLInputElement).value
                    ),
                  })
                }
              />
            </Group>
          </>
        )}
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  background-color: #f5f5f5;
  margin-bottom: 20px;
`;

const Details = styled.fieldset`
  & > legend {
    color: #fff;
    font-size: 1rem;
    background-color: #000;
    padding: 0.25rem 0.5rem;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const connector = connect(undefined, (dispatch, props: Props) => ({
  changeProp: (data: Partial<LayerData>) =>
    dispatch(actions.changeData([props.id, data])),
}));
type StateProps = ConnectedProps<typeof connector>;

export default connector(LayerRow);
