import React from "react";
import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";
import useConnectivity from "../../utils/useConnectivity";
import NoInternet from "../../components/NoInternet/NoInternet";


function Home() {
   let connectionStatus = useConnectivity();
   if (connectionStatus === false) {
      return <NoInternet />
   }
   return (
      <Body />
   );
}

export default Home;