import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Rapi = () => {
    let navigate=useNavigate();
  let [data,updatedata]=useState([]);
  let [product,updateproduct]=useState({id:'',name:'',price:0,cat:'',cmp:''});
  useEffect(()=>{
    async function show()
    {
        let res=await axios.get('https://layagec.pythonanywhere.com/product/');
        //console.log(res.data);
        updatedata(res.data);
    }
    show();
  },[data])
  function change(e)
  {
    updateproduct({...product,[e.target.name]:e.target.value});
  }
  return (
    <>
      <button className='btn btn-danger' onClick={()=>{
          navigate("/logout")
      }}>Logout</button>
      <table className='table table-bordered text-center table-primary'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v,i)=>{
              return <tr key={i}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.price}</td>
                <td>{v.cat}</td>
                <td>{v.cmp}</td>
                <td><button className='btn btn-danger' onClick={()=>{
                  async function deleteProduct()
                  {
                      let res=await axios.delete(`https://layagec.pythonanywhere.com/product/${v.id}/`);
                      if(res.status===204)
                      {
                        alert('product deleted sucessfully');
                      }
                  }
                  deleteProduct();
                }}>Delete</button></td>
                <td><button className='btn btn-warning' onClick={()=>{
                  updateproduct(v);
                }}>Update</button></td>
              </tr>
            })}
          </tbody>
      </table>
      <form onSubmit={(e)=>{
        e.preventDefault();
        if(product.id==='')
        {
          async function addPro()
          {
            let res=await axios.post('https://layagec.pythonanywhere.com/product/',product);
            if(res.status===201)
            {
              alert('product added');
            }
        }
        addPro();
        }
        else
        {
          async function updatePro()
        {
            let res=await axios.put(`https://layagec.pythonanywhere.com/product/${product.id}/`,product);
            if(res.status===200)
            {
              alert('product added');
            }
        }
        updatePro();
        }
        updateproduct({id:'',name:'',price:0,cat:'',cmp:''});
      }}>
            Name<input type="text" name="name" value={product.name} onChange={change} /><br/>
            Price<input type="number" name="price" value={product.price} onChange={change} /><br/>
            Category<input type="text" name="cat" value={product.cat} onChange={change} /><br/>
            Company<input type="text" name="cmp" value={product.cmp} onChange={change} /><br/>
            {product.id===''?<button className='btn btn-primary'>Add Product</button>:<button className='btn btn-primary'>Update Product</button>}
      </form>
        Id<input type="number" name="id" onKeyUp={(e)=>{
            async function showById()
            {
                let d=await axios.get(`https://layagec.pythonanywhere.com/product/${e.target.value}/`);
                console.log(d.data);
            }
            showById();
        }} /><br/>
    </>
  )
}
export default Rapi