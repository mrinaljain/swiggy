import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
const SuggestionCard = (props) => {
   const { text, type, cloudinaryId } = props.item
   return (
      <Link to="">
         <div className="flex hover:bg-slate-200 rounded-md px-2 py-1 items-center my-5">
            <img
               src={CDN_URL + cloudinaryId}
               className="rounded-md max-w-14 bg-cover object-cover"
            />
            <div className="details pl-2">
               <h4>{text}</h4>
               <h5>{type}</h5>
            </div>
         </div>
      </Link>
   )
}

export default SuggestionCard;