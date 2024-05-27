import React from "react";
import User from "../../components/User";
import UserClass from "../../components/UserClass";


function About() {

   return (
      <div>
         <h1>
            This is About Us Page
         </h1>
         <User info={{ name: "Mrinal", surname: "Jain", age: 30 }} />
         <UserClass info={{ name: "Mrinal", surname: "Jain", age: 30 }} />
      </div>
   );
}

export default About;