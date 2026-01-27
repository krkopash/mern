import { useParams } from "react-router-dom";
import "./router.css";

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
        <p><strong>Name:</strong> User - {id}</p>
        <p><strong>Email:</strong> {id}@example.com</p>
      </div>
      
      <div className="page">

      <div className="auth-card">
        <form>
          <h2>Basic User Information:</h2>

          <label>Domain:</label>
          <select >
            <option className="op">Web</option>
            <option className="op">App</option>
            <option className="op">AI & ML</option>
          </select>

         <label>Date of Birthday:</label>
         <input type="date" id="birthday" name="birthday" required></input>
         <label>Select a Time:</label>
         <input type="time" id="set" name="set" required></input>

         <label>Add your homepage:</label>
         <input type="url" id="url" name="url" placeholder="www.google.com"></input>

         <label>Select Your available week of month:</label>
         <input type="week" id="week" name="week" required></input>
         
         <label> Select File:</label>
         <input type="file" id="myfile" name="myfile"></input>

         <label>Rate your skills:</label>
         <input type="number" id="rate" name="rate" min={1} max={5} required></input>


          <label>Any suggestion:</label>
          <textarea name="message" rows={3} cols={5} placeholder="Start From Here..." required>
          </textarea>

          <button type="submit" className="buttontodo">
            Submit
          </button>
          
          
        </form>

      </div>
    </div>
      
    </div>
  );
};

export default Profile;