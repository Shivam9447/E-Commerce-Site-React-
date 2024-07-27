import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Admin = () => {
    const [data, updatedata] = useState({id:'',pwd:''});
    let navigate=useNavigate();
    let change=(e)=>
    {
        updatedata({...data,[e.target.name]:e.target.value})
    }
  return (
    <>
    <form onSubmit={(e)=>{
        e.preventDefault();
        if(data.id==='admin'&&data.pwd==='admin123')
        {
            navigate("/rapi");
        }
        else
        {
            alert('Invalid Id and Password');
        }
    }}>
        <input type="text" name="id" value={data.id} onChange={change} placeholder="please enter Id" className='form-control' />
        <input type="password" name="pwd" value={data.pwd} onChange={change} placeholder="please enter password" className='form-control' />
        <button className='btn btn-primary'>Login</button>
    </form>
    </>
  )
}
export default Admin