import { addItemToLs } from "../../utils/ls";
import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   username: "",
//   fullname: "",
//   email: "",
//   password: "",
//   re_password: "",
//   phone: "",
//   state: "",
//   address: "",
//   message_type: "email",
//   otpValue: "",
// };
const initialState = {
  username: "",
  fullname: "josemaria",
  email: "Josemariaofurum@gmail.com",
  password: "New990#",
  re_password: "New990#",
  phone: "josl",
  state: "",
  address: "js",
  message_type: "email",
  otpValue: "",
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
