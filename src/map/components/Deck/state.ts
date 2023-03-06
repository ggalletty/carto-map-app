import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeckData } from "../../domain/models/deck";

type DeckState = {
  isLoading: boolean;
  error?: string | null;
} & DeckData;

const slice = createSlice({
  name: "deck",
  initialState: {
    isLoading: true,
    center: [32.0, -80.0],
    zoom: 9,
  } as DeckState,
  reducers: {
    onInit: (
      state,
      action: PayloadAction<{ loading: boolean; error: string | null }>
    ) => {
      state.isLoading = action.payload.loading;
      state.error = action.payload.error;
    },
    setCenter: (state, action: PayloadAction<[number, number]>) => {
      state.center = action.payload;
    },
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
  },
});

export const { actions, name, reducer } = slice;
export default reducer;
