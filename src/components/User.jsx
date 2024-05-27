import react from "react"

const User = (props) => {
   const { name, surname, age } = props.info;
   return (
      <div className="w-38 bg-red-300">
         <h1>Functional Component</h1>
         <h2>{name + " " + surname}</h2>
         <h2>{age}</h2>
      </div>);
}

export default User;