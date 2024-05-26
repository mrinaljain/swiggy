import { createContext } from "react";

const UserContext = createContext({
   userName: "Mrinal Jain",
   userImage: "https://avatars.githubusercontent.com/mrinaljain",
});

export default UserContext;