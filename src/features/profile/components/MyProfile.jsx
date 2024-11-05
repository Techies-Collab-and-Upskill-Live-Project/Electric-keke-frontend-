
const MyProfile = ({user}) => {

  return (
    <div className="prof-form-body">
      <div>
        <p>Fullname</p>
        <div className="flex items-center profile-management-input">{user?.fullname}</div>
      </div>

      {/* <div>
        <p>Middle Name</p>
        <div className="flex items-center profile-management-input">
          middle name
        </div>
      </div>

      <div>
        <p>Last Name</p>
        <div className="flex items-center profile-management-input">
          last name
        </div>
      </div> */}

      <div>
        <p>Email</p>
        <div className="flex items-center profile-management-input">{user?.email}</div>
      </div>
      <div>
        <p>Phone</p>
        <div className="flex items-center profile-management-input">{user?.phone_number}</div>
      </div>

      {/* <div>
        <p>Date of Birth</p>
        <div className="flex items-center profile-management-input">
          D.O.B when dem born yoy
        </div>
      </div> */}

      <div>
        <p>State</p>
        <div className="flex items-center profile-management-input">
          {user?.state_of_residence}
        </div>
      </div>

      {/* <div>
        <p>L G A</p>
        <div className="flex items-center profile-management-input">LGa</div>
      </div> */}

      <div>
        <p>Address</p>
        <div className="flex items-center profile-management-input">
         {user?.address}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
