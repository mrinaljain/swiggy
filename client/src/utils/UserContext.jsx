import { createContext } from "react";

const UserContext = createContext({
   userFullName: "Mrinal Jain",
   userImage: "https://avatars.githubusercontent.com/mrinaljain",
   changeName: () => { }
});

export default UserContext;