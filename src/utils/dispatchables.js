import { updateBookingData } from "../store/slices/bookride-slice";
import { changeInputValue } from "../store/slices/form-data-slice";
import {
  alertUser,
  changeVerificationType,
  chooseSupport,
  finishLoad,
  hideAlert,
  selectARider,
  startLoad,
  storeListOfRiders,
} from "../store/slices/global-slice";
import { newNotification } from "@/store/slices/notification-slice";
import { useDispatch } from "react-redux";

const dispatchables = () => {
  const dispatch = useDispatch();

  const chooseOtpMethod = (method) => {
    dispatch(changeInputValue({ key: "message_type", value: method }));
  };

  const changeAuthFormData = (e) => {
    const { name: key, value } = e.target;
    dispatch(changeInputValue({ key, value }));
  };

  const chooseRider = (item) => {
    dispatch(selectARider(item));
  };

  const inputDataForBookingRequest = (key, value) => {
    dispatch(updateBookingData({ key, value }));
  };

  const inputBookingData = (e) => {
    const { name: key, value } = e.target;
    dispatch(updateBookingData({ key, value }));
  };

  const loading = () => {
    dispatch(startLoad());
  };

  const unloading = () => dispatch(finishLoad());

  const switchVerificationType = (v_type) => {
    dispatch(changeVerificationType(v_type));
  };

  const showAlert = (msg, type = "success", time = 5000) => {
    dispatch(alertUser({ msg, type }));
    setTimeout(() => {
      dispatch(hideAlert());
    }, time);
  };

  const updateDriversList = (data) => {
    dispatch(storeListOfRiders(data));
  };

  const whatSupport = (key) => {
    dispatch(chooseSupport(key));
  };

  const showNotification = (notification) => {
    dispatch(newNotification(notification));
  };

  const nullifyNotifcation = () => dispatch(newNotification(null))

  return {
    changeAuthFormData,
    chooseOtpMethod,
    chooseRider,
    inputBookingData,
    inputDataForBookingRequest,
    loading,
    nullifyNotifcation,
    showAlert,
    showNotification,
    switchVerificationType,
    unloading,
    updateDriversList,
    whatSupport,
  };
};

export default dispatchables;
