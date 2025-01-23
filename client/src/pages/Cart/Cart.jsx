import react from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuItemCard from "../../components/MenuItemCard/MenuItemCard";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {

   // accessing the specific slice of the state.slicename.itemname
   const cardItems = useSelector((state) => state.cart.items);
   console.log("cardItems", cardItems);
   const dispatch = useDispatch();
   const clear = () => {
      dispatch(clearCart());
   }
   return (
      <div>
         <h2>Cart</h2>
         <button onClick={clear}>Clear Cart</button>
         {cardItems.map((card) => <MenuItemCard
            itemInfo={card}
         />)}
      </div>
   );
}


export default Cart;