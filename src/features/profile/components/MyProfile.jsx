
const MyProfile = ({user}) => {

  return (
    <div className="prof-form-body">
      <div>
        <p>First Name</p>
        <div className="profile-management-input flex items-center">{user?.fullname}</div>
      </div>

      <div>
        <p>Middle Name</p>
        <div className="profile-management-input flex items-center">
          middle name
        </div>
      </div>

      <div>
        <p>Last Name</p>
        <div className="profile-management-input flex items-center">
          last name
        </div>
      </div>

      <div>
        <p>Email</p>
        <div className="profile-management-input flex items-center">{user?.email}</div>
      </div>
      <div>
        <p>Phone</p>
        <div className="profile-management-input flex items-center">{user?.phone}</div>
      </div>
      <div>
        <p>Date of Birth</p>
        <div className="profile-management-input flex items-center">
          D.O.B when dem born yoy
        </div>
      </div>
      <div>
        <p>State</p>
        <div className="profile-management-input flex items-center">
          {user?.state_of_residence}
        </div>
      </div>
      <div>
        <p>L G A</p>
        <div className="profile-management-input flex items-center">LGa</div>
      </div>
      <div>
        <p>Addres</p>
        <div className="profile-management-input flex items-center">
         {user?.address}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
