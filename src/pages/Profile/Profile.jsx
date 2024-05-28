import react, { useContext, useState } from "react";
import UserContext from "../../utils/userContext";


function Profile() {

   const userDetails = useContext(UserContext);
   const { userFullName, changeName } = userDetails;

   function updateName(e) {
      console.log(e.target.value);
      changeName(e.target.value);
   }
   return (<div>
      <h1>{userFullName}</h1>
      <input
         type="text"
         onChange={updateName}
         value={userFullName}
         className="border border-double mr-2"
      ></input>

   </div>);
}

export default Profile