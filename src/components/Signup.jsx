import React, { useState } from 'react'
import { addDoc, collection,doc,updateDoc,query,onSnapshot,deleteDoc } 
from "@firebase/firestore";
import { firestore } from './firebase';
const Signup = () => {
    let [data,updatedata]=useState({name:'',email:'',pwd:''});
    let change=(e)=>{
        updatedata({...data,[e.target.name]:e.target.value});
    }
  return (
    <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                try {
                      addDoc(collection(firestore, "user"), data);
                      alert('added sucessfully');
                  } catch(err) {
                      console.log(err)
                  }
            }}>
                Name<input type="text" name="name" value={data.name} onChange={change} /><br/>
                Email<input type="email" name="email" value={data.email} onChange={change} /><br/>
                Password<input type="password" name="pwd" value={data.pwd} onChange={change} /><br/>
                <button className='btn btn-primary'>Sign Up</button>
            </form>
    </>
  )
}
export default Signup