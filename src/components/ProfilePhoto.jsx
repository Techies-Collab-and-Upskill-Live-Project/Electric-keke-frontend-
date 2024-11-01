import IconWrapper from "./IconWrapper";

const ProfilePhoto = ({ styling, imageUrl }) => {
  return (
    <IconWrapper
      imageUrl={imageUrl || "/persons/profile.jpeg"}
      containerStyle={styling}
      scale="rounded-full"
    />
  );
};

export default ProfilePhoto;
