import {
  createListenerMiddleware,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { LayerData } from "../../domain/models/layer";

type Data = LayerData & { loaded?: boolean };
type LayerState = Record<string, Data>;

const slice = createSlice({
  name: "layer",
  initialState: {} as LayerState,
  reducers: {
    onLoad: (state, action: PayloadAction<[string, boolean]>) => {
      state[action.payload[0]] = {
        ...state[action.payload[0]],
        loaded: action.payload[1],
      };
    },
    updateLayer: (state, action: PayloadAction<[string, Partial<Data>]>) => {
      state[action.payload[0]] = {
        ...state[action.payload[0]],
        ...action.payload[1],
      };
    },
  },
});

export const { actions, name, reducer } = slice;
export default reducer;
