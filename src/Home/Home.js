import React, {useEffect, useState, useContext} from "react";
import {AuthContext} from '../Auth';
import spinner from '../images/spinner/spinner.png';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { database } from "../base";
const Home = () => {
  const [products , setProducts] = useState([]);
  const { currentUser } = useContext(AuthContext);
  function AddToCart(key){
    console.log(key);
    console.log(currentUser);
    database.ref("Cart").push({
      userEmail:currentUser._delegate.email,
      itemId:key
    });
  };
  useEffect(() => {
    database.ref("product").on('value',(snapshot)=>{
      const prods=snapshot.val();
      const items=[]
      for (let id in prods){
        items.push(
          {
            key:id,
            value:prods[id]
          }
        );
      }
      console.log(items);
      setProducts(items);
    });
  }, []);
  return(
    <div>
      {
        products.map((value)=>(
          <div key={value.key}>
            {value.value.name} - {value.value.description}
            <button onClick={AddToCart.bind(this,value.key)}>Add</button>
          </div>
        ))
      }
    </div>
    )
};

export default Home;  