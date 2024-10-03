import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCalling = () => {
    const [data , setData] = useState([])

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MjAwMDYwMTU2NzctNjQ3MjUxNzQ4IiwiaWF0IjoxNzIwMDA2MDE1LCJleHAiOjE3MjAxNzg4MTV9._gEEMvJpE8xPdIPmdlgcNgflPksFW_wO_AiQB_Zw9ag"

    useEffect(() => {
        dataView()
    },[])

    function dataView()
    {
        axios.get('https://service.apikeeda.com/contact-book',{
            headers : {
                Authorization : token
            }
        })  
        .then((res) => {
            console.log(res.data.data);
            setData(res.data.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    

  return (
    <div>
        <table border={1}>
            <tr>
                <td>Id</td>
                <td>First name</td>
                <td>Last name</td>
                <td>Phone no</td>
                <td>Email</td>
                <td>Nick name</td>
            </tr>
            {
                data.map((el , index) => (
                    <tr>
                        <td>{el._id}</td>
                        <td>{el.firstName}</td> 
                        <td>{el.lastName}</td>
                        <td>{el.mobileNo}</td>
                        <td>{el.email}</td>
                        <td>{el.nickName}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default ApiCalling
