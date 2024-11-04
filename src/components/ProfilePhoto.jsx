import IconWrapper from "./IconWrapper";

const ProfilePhoto = ({ styling,noImageContainerStyle, imageUrl, textStyle, text = "P" }) => {
  return imageUrl ? (
    <IconWrapper
      imageUrl={imageUrl || user?.photo}
      containerStyle={styling}
      imageClassname="image rounded-full"
    />
  ) : (
    <div className={noImageContainerStyle}>
      <p className={`${textStyle} capitalize font-josefin font-bold`}>{text}</p>
    </div>
  );
};

export default ProfilePhoto;

/***/
