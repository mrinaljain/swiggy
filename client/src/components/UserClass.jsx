import react, { Component } from "react"

class UserClass extends Component {
   // Old way of using class component
   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       userName: "Mrinal",
   //       otherUser: "User 2"
   //    }
   //    console.log(this.props.info.name + "Child constructor");
   // }
   // NEW way of using class component
   state = {
      userName: "Mrinal",
      otherUser: "User 2"
   }
   componentDidMount() { 
      console.log("Child Did Mount");
   }
   componentDidUpdate() {
      // caled  when any changs happen aftr first render
      console.log("Child Did Update");
   }
   componentDidCatch() {
      console.log("Parent Did Catch");
   }
   render() {
      console.log("Child Render");
      const { userName, otherUser } = this.state;
      const { name, surname } = this.props.info;
      return (
         <div className="w-38 bg-red-300">
            <h1>Class Component</h1>
            <h2>{name + " " + surname}</h2>
            <h2>{otherUser}</h2>
            <h2>{userName}</h2>
            <button className="border-t-cyan-300 lowercase border-spacing-6 border-dashed " onClick={() => {
               this.setState({
                  userName: "Introvert Influencer"
               })
            }}>Change Name</button>
         </div>);
   }
}
export default UserClass;