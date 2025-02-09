import react from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuItemCard from "../../components/MenuItemCard/MenuItemCard";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {

   // accessing the specific slice of the state.slicename.itemname
   const cardItems = useSelector((state) => state.cart.items);

   const dispatch = useDispatch();
   const clear = () => {
      dispatch(clearCart());
   }

   const handleForm = async (formData) => {
      var name = formData.get("userName")
      console.log(name);
   }
   return (
      <div>
         <h2>Cart</h2>
         <button className="bg-red-400 px-4 rounded-md text-white" onClick={clear}>Clear Cart</button>
         <form action={handleForm} className=" px-5 my-5">
            <input
               className="bg-orange-200 px-1 py-2 rounded-sm"
               type="text"
               name="userName" />
            <button type="submit"> Submit form</button>
         </form>
         {cardItems.map((card) => <MenuItemCard
            itemInfo={card}
         />)}
      </div>
   );
}


export default Cart;