import react, { Component } from "react"

class UserClass extends Component {
   constructor(props) {
      super(props);
      console.log(props);
   }
   render() {
      return (
         <div className="w-38 bg-red-300">
            <h1>Class Component</h1>
            {/* one way to access pprops using this */}
            {/* <h2>{this.props.info.name + " " + this.props.info.surname}</h2>
            <h2>{this.props.info.age}</h2> */}
            <h2>{this.props.info.name + " " + this.props.info.surname}</h2>
            <h2>{this.props.info.age}</h2>
         </div>);
   }
}
export default UserClass;