import { useParams } from "react-router-dom";

type ProfileParams = {
    id: string;
};

const Profile = () => {
    const {id} = useParams<ProfileParams>();

    return (
    <div className="page">
      <h2>User Profile</h2>

      <div className="profile-card">
        <p><strong>User ID:</strong> {id}</p>
        <p><strong>Name:</strong> User {id}</p>
        <p><strong>Email:</strong> {id}@example.com</p>
      </div>
    </div>
  );
};

export default Profile;