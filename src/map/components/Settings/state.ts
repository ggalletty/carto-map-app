import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayerData } from "../../domain/models/layer";

type SettingsState = {
  isOpen: boolean;
};

const slice = createSlice({
  name: "settings",
  initialState: { isOpen: false } as SettingsState,
  reducers: {
    toggle: (state, action: Action) => {
      state.isOpen = !state.isOpen;
    },
    changeData: (
      state,
      action: PayloadAction<[string, Partial<LayerData>]>
    ) => {},
  },
});

export const { actions, name, reducer } = slice;
export default reducer;
