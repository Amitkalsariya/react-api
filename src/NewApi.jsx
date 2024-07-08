import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const NewApi = () => {
    const [data, setdata] = useState([])
        const token = "a1720436012007jyy624823406dp"
    useEffect(()=>{
        test()
    },[])
    function test() {
        axios.get("https://service.apikeeda.com/api/v1/gst-invoice", {
            headers: {
                 "x-apikeeda-key" : token
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

    const handleSubmit = (values) => {
        console.log(values);
        axios.post('https://service.apikeeda.com/api/v1/gst-invoice',values,{
            headers: {
                "x-apikeeda-key" : token, 
           }
        })
        .then((res) => {
            console.log("success");
            test();
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    const deleteData = (_id) => {
     
        axios.delete(`https://service.apikeeda.com/api/v1/gst-invoice/${_id}`,{
            headers: {
                "x-apikeeda-key" : token, 
           }
        })
        .then((res) => {
            console.log("success");
            test();
        })
        .catch((error) =>{
            console.log(error);
        })
    }
   
    
    
    return (
        <div>

            <Formik
                initialValues={{
                    name : '',
                    gstno : '',
                    baseamount : '',
                    gstpercentage : '',
                    totalamount : '',
                    invoiceno : ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    name :- <Field type="text" name="name"></Field><br /><br />
                    gstno :- <Field type="text" name="gstno"></Field><br /><br />
                    baseamount :- <Field type="text" name="baseamount"></Field><br /><br />
                    gstpercentage :- <Field type="text" name="gstpercentage"></Field><br /><br />
                    totalamount :- <Field type="text" name="totalamount"></Field><br /><br />
                    invoiceno :- <Field type="text" name="invoiceno"></Field><br /><br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>

                <table border={1}>
                    <tr>
                        <th>Id</th>
                        <th>Name </th>
                        <th>GST NO</th>
                        <th>Base Amt</th>
                        <th>per</th>
                        <th>Total Amt</th>
                        <th>Invoice No</th>
                        <th>N</th>
                        <th>Delete</th>
                     
                    </tr>
                    {
                        data.map((el,i)=>(
                            <tr>
                               <td>{el._id}</td>
                               <td>{el.name}</td>
                               <td>{el.gstno}</td>
                               <td>{el.baseamount}</td>
                               <td>{el.gstpercentage}</td>
                               <td>{el.totalamount}</td>
                               <td>{el.invoiceno}</td>
                               <td>{el.__v}</td>
                               <td><button onClick={()=>{deleteData(el._id)}}>Delete</button></td>
                             
                            </tr>
                        ))
                    }
                </table>
        </div>
    )
}

export default NewApi
