import { addItemToLs } from "../../utils/ls";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  email: "",
  fullname: "",
  message_type: "email",
  otpValue: "",
  password: "",
  phone: "",
  re_password: "",
  role: "User",
  state: "",
  username: "",
};


const formDataSlice = createSlice({
  name: "form-data",
  initialState,
  reducers: {
    changeInputValue(state, action) {
      const { key, value } = action.payload;
      const newFormData = { ...state, [key]: value };
      addItemToLs("formData", newFormData);
      return newFormData;
    },
    setFormData(state, action) {
      const { formData } = action.payload;
      return { ...formData };
    },
  },
});

export const { changeInputValue, setFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
