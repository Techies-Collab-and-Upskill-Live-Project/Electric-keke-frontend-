import IconWrapper from "./IconWrapper";

const ProfilePhoto = ({
  sharedStyle,
  styling,
  noImageContainerStyle,
  imageUrl,
  textStyle,
  text = "P",
}) => {
  return imageUrl ? (
    <IconWrapper
      imageUrl={imageUrl || user?.photo}
      containerStyle={`${sharedStyle} ${styling}`}
      imageClassname="image rounded-full"
    />
  ) : (
    <div className={`${sharedStyle} ${noImageContainerStyle}`}>
      <p className={`${textStyle} capitalize font-josefin font-bold`}>{text}</p>
    </div>
  );
};

export default ProfilePhoto;

/***/
