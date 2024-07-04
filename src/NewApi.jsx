import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewApi = () => {
    const [data, setdata] = useState([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MjAwMDc1ODM2NDMtODk5OTA3MDI2IiwiaWF0IjoxNzIwMDA3NTgzLCJleHAiOjE3MjAxODAzODN9.7RKs-BDLgp1TLtQ7jnnLonVCSZEBp_kDmOfDIfE5JX0"
    useEffect(()=>{
        test()
    },[])
    function test() {
        axios.get("https://service.apikeeda.com/movie", {
            headers: {
                Authorization: token
            }   
        })
        .then((res)=>{
            console.log(res.data.data);
            setdata(res.data.data)
        })
        .catch((er)=>{
            console.log(er);
        })
    }
    
    
    return (
        <div>
                <table border={1}>
                    <tr>
                        <th>PosterURl</th>
                        <th>Movie </th>
                        <th>Time</th>
                        <th>Available</th>
                        <th>Type</th>
                        <th>Review</th>
                    </tr>
                    {
                        data.map((el,i)=>(
                            <tr>
                                <td>{el.posterURL}</td>
                                <td>{el.movieName}</td>
                                <td>{el.runningTime}</td>
                                <td>{el.availableOn}</td>
                                <td>{el.movieType}</td>
                                <td>{el.imdbReview}</td>
                            </tr>
                        ))
                    }
                </table>
        </div>
    )
}

export default NewApi
