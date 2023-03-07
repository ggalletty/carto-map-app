import { createListenerMiddleware } from "@reduxjs/toolkit";
import { actions as settings } from "../Settings/state";
import { actions } from "./state";

const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: settings.changeData,
  effect: (action, { dispatch }) => {
    const [id, data] = action.payload;
    dispatch(actions.updateLayer([id, data]));
  },
});

export const { middleware } = listener;
