import React, { useEffect, useState } from 'react';
import { addDoc ,collection,doc,updateDoc,query,onSnapshot,deleteDoc } 
from "@firebase/firestore";
import { firestore } from './firebase'; 
import { useNavigate } from 'react-router-dom';
const Cart = ({id,name,price,cat,cmp}) => {
  let [uid,updateuid]=useState([]);
  let navigate=useNavigate();
  useEffect(()=>{
    const q = query(collection(firestore, "ulog"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let myarray = [];
      querySnapshot.forEach((d) => {
        //console.log(d.data());
        myarray.push({ ...d.data(),uid:d.id });
      });
      let d=myarray;
      updateuid(d);
      //console.log(myarray);
    });
    return () => unsub();          
  })
  return (
    <>
    <div className='col-sm-4'>
    <div class="card" style={{width:'400px'}}>
    <img className="card-img-top" src="https://picsum.photos/200/300" alt="Cardimage" style={{'width':'99%','height':'230px'}} />
    <div class="card-body">
      <h1 class="card-title">{name}</h1>
      <h4 class="card-title">Price : {price}</h4>
      <h4 class="card-title">Category : {cat}</h4>
      <h4 class="card-title">Company : {cmp}</h4>
      <a href="/" class="btn btn-primary">Buy Now</a>
      <button class="btn btn-warning" onClick={()=>{
        if(uid.length===0)
        {
            navigate('/login');
        }
        else
        {
          //console.log(uid);
          addDoc(collection(firestore, "cart"), {
            name:name,
            price:price,
            cat:cat,
            cmp:cmp,
            uid:uid[0]['id']
          }).then(()=>{
            alert('product sucessfully added to cart');
          });
        }
      }}>Add To Cart</button>
    </div>
  </div>
  </div>
    </>
  )
}

export default Cart