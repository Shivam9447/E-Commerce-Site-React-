import React, { useState } from 'react'
import { addDoc, collection, doc, updateDoc, query, onSnapshot, deleteDoc }
  from "@firebase/firestore";
import { firestore } from './firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let navigate = useNavigate();
  let [data, updatedata] = useState({ id: '', email: '', pwd: '' });
  let [user, updateuser] = useState([]);
  let change = (e) => {
    updatedata({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        const q = query(collection(firestore, "user"));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let myarray = [];
          querySnapshot.forEach((d) => {
            //console.log(d.data());
            myarray.push({ ...d.data(), id: d.id });
          });
          updateuser(myarray);
          //console.log(myarray);
          for (let i of myarray) {
            if (i.email === data.email && i.pwd === data.pwd) {
              //alert('correct')
              //console.log(i.id);
              try {
                addDoc(collection(firestore, "ulog"), { id: i.id }).then(function () {
                  navigate('/')
                });
                // alert('added sucessfully');
              } catch (err) {
                console.log(err)
              }
              navigate('/')
            }
            else {
              navigate('/login')
            }
          }
        });
        return () => unsub();
      }}>
        Email<input type="email" name="email" value={data.email} onChange={change} /><br />
        Password<input type="password" name="pwd" value={data.pwd} onChange={change} /><br />
        <button className='btn btn-primary'>Login</button>
      </form>
    </>
  )
}

export default Login