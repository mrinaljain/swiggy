import React, { useEffect, useState } from 'react';

const useScrollDetector = () => {
   const [is150pxLeft, setIs150pxLeft] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         // Calculate how much scroll is remaining
         //? document.documentElement.scrollHeight => Means k pura document jo page pr load hua hia uski height
         //? window.innerHeight => Meands ke aapke browser window k height
         //? window.scrollY;= > kitna scroll hi gya hai
         const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
         const scrolledHeight = window.scrollY;

         // Check if there's 50px left to scroll
         if (scrollableHeight - scrolledHeight <= 150) {
            setIs150pxLeft(true);
         } else {
            setIs150pxLeft(false);
         }
      };
      // Attach scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);

      // Remove scroll event listener when component unmounts
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return is150pxLeft;

}

export default useScrollDetector;

