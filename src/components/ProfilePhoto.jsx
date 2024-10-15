
const ProfilePhoto = ({ styling }) => {
  return (
    <div className={styling}>
      <img
        src="/persons/profile.jpeg"
        alt="profile"
        className="image rounded-full"
      />
    </div>
  );
};

export default ProfilePhoto;
