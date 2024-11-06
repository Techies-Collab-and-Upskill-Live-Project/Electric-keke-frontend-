export const MANAGE_CONDITIONS = (data) => ({
  "Personal Information": data?.fullname && data?.email,
  "Change Password":
    data?.old_password && data?.new_password && data?.re_new_password,
});
