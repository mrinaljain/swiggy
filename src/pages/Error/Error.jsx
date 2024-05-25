import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
   let err = useRouteError();

   console.log(err);
   return (
      <div>
         <h1>
            {err.status}
         </h1>
         <h2>
            {err.statusText}
         </h2>
         <p>
            {err.error.message}
         </p>
      </div>
   );
}

export default Error;