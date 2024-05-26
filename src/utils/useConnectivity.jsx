import { useState } from "react";

const useConnectivity = () => {
   const [connectionStatus, setConnectionStatus] = useState(true);

   window.addEventListener("offline", (e) => {
      setConnectionStatus(false);
   });

   window.addEventListener("online", (e) => {
      setConnectionStatus(true);
   });
   return connectionStatus;
}

export default useConnectivity;