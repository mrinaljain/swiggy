import react, { Component } from "react"

class UserClass extends Component {
   constructor(props) {
      super(props);
      // console.log(props);
      this.state = {
         userName: "Mrinal",
         otherUser: "User 2"
      }
      console.log(this.props.name + "Child constructor");
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
      return (
         <div className="w-38 bg-red-300">
            <h1>Class Component</h1>
            <h2>{this.props.info.name + " " + this.props.info.surname}</h2>
            <h2>{otherUser}</h2>
            <h2>{userName}</h2>
            <button onClick={() => {
               this.setState({
                  userName: "Introvert Influencer"
               })
            }}>Change Name</button>
         </div>);
   }
}
export default UserClass;