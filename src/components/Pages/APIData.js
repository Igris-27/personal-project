import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, addAllData, remData, clearData } from "../utils/slice";



const APIData = () => {
    const dispatch = useDispatch();
    // const [result, setResult] = useState("");
    // const [cartItems, setCartItems] = useState([]);
    const cartItems = useSelector((store) => store.cart.data);
    const data = useSelector((store) => store.cart.data);
    const result = useSelector((store) => store.cart.initialData);
    const {all, loading,error} = useSelector((store) => store.users);
    

 useEffect(() => {
    dispatch({ 
    type: "FETCH_USER_REQUEST" 
})
},[dispatch])

const handleclick = (item) => {
  dispatch(addData(item));
  console.log("Item added to cart:", item);
};

const handleform = (item) => {
  dispatch(remData(item));
  console.log("Item removed from form:", item);
};

 return (
        <div>
            <h1>User List</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {/* <button onClick={() => dispatch(clearData())}>Clear Form</button> */}
            <ul>
                {all && all.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <h3>{item.username}</h3>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.website}</p>
                        {/* <button onClick={() => handleclick(item)} >Click to add in the Form </button>
                        <button onClick={() => handleform(item)} >Click to remove from the Form </button> */}

                    </li>
                ))}
            </ul>
            
        </div>  
 )

}
export default APIData
