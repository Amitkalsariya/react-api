import axios from 'axios'
import React, { useState } from 'react'

const Second = () => {
    const [data,setData]=useState([])
    function n(){
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((res)=>{
            setData(res.data)
        })
        .catch((er)=>{
            console.log(er);
        })
    }
    n()
    
  return (
    <div>
        <table border={1}>
            <tr>
                <th>post Id</th>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
              

            </tr>
            {
                data.map((el,i)=>(

                    <tr>
                        <td>{el.postId}</td>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>

                      
                    </tr>
                ))
            }
        </table>
    </div>
  )
}



export default Second

