import react from "react";
import { useSelector } from "react-redux";
import MenuItemCard from "../../components/MenuItemCard/MenuItemCard";


const Cart = () => {

   const cardItems = useSelector((state) => state.cart.items);
   console.log("cardItems", cardItems);
   return (
      <div>
         <h2>Cart</h2>
         {cardItems.map((card) => <MenuItemCard
            itemInfo={card}
         />)}
      </div>
   );
}


export default Cart;