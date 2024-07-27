import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
const Home = () => {
  let navigate=useNavigate();
  let [data,updatedata]=useState([]);
  useEffect(()=>{
    async function show()
    {
        let res=await axios.get('https://layagec.pythonanywhere.com/product/');
        //console.log(res.data);
        updatedata(res.data);
    }
    show();
  },[data])
  return (
    <>
        <div className='row'>
            {data.map((v,i)=>{
              return <Cart id={v.id} name={v.name} price={v.price} cat={v.cat} cmp={v.cmp} />
            })}
        </div>      
    </>
  )
}
export default Home;