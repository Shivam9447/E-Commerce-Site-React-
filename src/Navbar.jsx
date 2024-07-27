import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addDoc ,collection,doc,updateDoc,query,onSnapshot,deleteDoc } 
from "@firebase/firestore";
import { firestore } from './components/firebase';
const Navbar = () => {
  let [uid,updateuid]=useState([]);
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
      console.log(uid);
    });
    return () => unsub();          
  })
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">E-Shopping</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className='nav-link' to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/about">About Us</Link>
        </li>
        {uid.length===0?<>
        <li class="nav-item">
        <Link className='nav-link' to="/signup">Sign Up</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/login">Login</Link>
        </li>
        </>:
        <>
        <li class="nav-item">
        <button className='nav-link' onClick={()=>{
          //console.log(uid)
          let t=uid[0];
          deleteDoc(doc(firestore,'ulog',t.uid));
        }}>Logout</button>
        </li>
        <Link className='nav-link' to={`/viewcart/${uid[0].id}`}>View Cart</Link>
        </>}
        </ul>
    </div>
  </div>
</nav>
    </>
  )
}
export default Navbar