import axios from 'axios'
import React, { useState } from 'react'

const First = () => {
    const [data, setData] = useState([])
    function ak() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                setData(res.data)
            })
            .catch((er) => {
                console.log(er);
            })
    }
    ak()
    return (
        <div>
            <table border={1}>
                <tr>
                    <th>Album Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Thumb_URL</th>
                </tr>
                {
                    data.map((el, i) => (
                        <tr>
                            <td>{el.albumId}</td>
                            <td>{el.id}</td>
                            <td>{el.title}</td>
                            <td>{el.url}</td>
                            <td>{el.thumbnailUrl}</td>
                        </tr>
                    ))
                 }
            </table>
        </div>
    )
}

export default First
