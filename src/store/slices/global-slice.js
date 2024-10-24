import { addItemToLs, getItemFromLs } from "../../utils/ls";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: { show: false, msg: "alert", type: "danger" },
  modalContent: "ride",
  nextDriverAuth: null,
  ridersList: getItemFromLs("ridersList") || [],
  rider: null,
  support: "faq",
  verificationType: "activate",
  loading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    startLoad(state) {
      return { ...state, loading: true };
    },
    finishLoad(state) {
      return { ...state, loading: false };
    },
    storeListOfRiders(state, action) {
      const ridersList = action.payload;
      addItemToLs("ridersList", ridersList);
      return { ...state, ridersList };
    },
    selectARider(state, action) {
      const rider = action.payload;
      addItemToLs("rider", rider);
      return { ...state, rider };
    },
    alertUser(state, action) {
      const { msg, type } = action.payload;
      return {
        ...state,
        alert: {
          show: true,
          msg,
          type,
        },
      };
    },
    hideAlert(state, action) {
      return { ...state, alert: { show: false, msg: "" } };
    },
    chooseSupport(state, action) {
      const support = action.payload;
      return { ...state, support };
    },
    changeVerificationType(state, action) {
      const verificationType = action.payload;
      return { ...state, verificationType };
    },
  },
});

export const {
  storeListOfRiders,
  hideAlert,
  alertUser,
  chooseSupport,
  selectARider,
  changeVerificationType,
  startLoad,
  finishLoad,
} = globalSlice.actions;

export default globalSlice.reducer;
