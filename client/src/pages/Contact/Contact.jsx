import React from "react";


function Contact() {

   return (
      <div>
         <h1 className="text-2xl bold text-center my-10">
            This is Contact Us Page
         </h1>

         <form className="flex flex-col w-4/6 m-auto">
            <label htmlFor="name"> NAME:</label>
            <input
               type="text"
               name="name"
               className="border border-solid mb-5"
            ></input>
            <label htmlFor="email"> EMAIL:</label>
            <input
               type="email"
               name="email"
               className="border border-solid mb-5"
            ></input>
            <label htmlFor="message"> Message:</label>
            <textarea
               className="border border-solid mb-5"
               name="message">

            </textarea>
            <button
               className="border border-solid bg-orange-200 rounded-md px-2">Submit</button>
         </form>
      </div>
   );
}

export default Contact;