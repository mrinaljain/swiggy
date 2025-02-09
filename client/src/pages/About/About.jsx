import React, { Component } from "react";
import User from "../../components/User";
import UserClass from "../../components/UserClass";


class About extends Component {
   // old way
   // constructor(props) {
   //    super(props);
   //    console.log("Parent constructor");
   // }

   componentDidMount() {
      console.log("Parent Did Mount");
   }
   componentDidUpdate() {
      console.log("Parent Did Update");
   }
   componentDidCatch() {
      console.log("Parent Did Catch");
   }
   render() {
      console.log("Parent Render");
      return (
         <div>
            <h1>
               This is About Us Page
            </h1>
            {/* Functional Component */}
            {/* <User info={{ name: "Mrinal", surname: "Jain", age: 30 }} /> */}
            {/* Class Component */}
            <UserClass info={{ name: "Mrinal", surname: "Jain", age: 30 }} />
            <UserClass info={{ name: "Mrinal", surname: "Jain", age: 30 }} />

         </div>
      );
   }

}

export default About;