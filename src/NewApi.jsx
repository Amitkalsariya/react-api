import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const NewApi = () => {
    const [data, setdata] = useState([])
    const [initialvalues , setinItialvalues] = useState({
        name: '',
        gstno: '',
        baseamount: '',
        gstpercentage: '',
        totalamount: '',
        invoiceno: ''
    })
    const [id,setId]=useState(null)
    const token = "a1720436012007jyy624823406dp"
    useEffect(() => {
        test()
    },[])
    function test() {
        axios.get("https://service.apikeeda.com/api/v1/gst-invoice", {
            headers: {
                "x-apikeeda-key": token
            }
        })
            .then((res) => {
                console.log(res.data.data);
                setdata(res.data.data)
            })
            .catch((er) => {
                console.log(er);
            })
    }

    const handleSubmit = (values,{resetForm}) => {

        if(id !== null)
        {
            axios.patch(`https://service.apikeeda.com/api/v1/gst-invoice/${id}`,values,{
                headers: {
                    "x-apikeeda-key": token,
                }
            })
            .then((res) => {
                console.log("success");
                test();
                setId(null)
              
            })
            .catch((error) => {
                console.log(error);
            })

        }
        else
        {
            axios.post('https://service.apikeeda.com/api/v1/gst-invoice', values, {
                headers: {
                    "x-apikeeda-key": token,
                }
            })
            .then((res) => {
                console.log("success");
                test();
                resetForm();
                
            })
            .catch((error) => {
                console.log(error);
            })
        }
            setinItialvalues({
                name: '',
                gstno: '',
                baseamount: '',
                gstpercentage: '',
                totalamount: '',
                invoiceno: ''
            })
    }

    const deleteData = (id) => {
        console.log(id);
        axios.delete("https://service.apikeeda.com/api/v1/gst-invoice/" + id, {
            headers: {
                "x-apikeeda-key": token
            }
        })
            .then((res) => {
                console.log("success");
                test()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const editData = (el , id) => {
        setinItialvalues({
        name: el.name,
        gstno: el.gstno,
        baseamount: el.baseamount,
        gstpercentage: el.gstpercentage,
        totalamount: el.totalamount,
        invoiceno: el.invoiceno
        })
        setId(id)
    }
    

    return (
        <div>

            <Formik
            enableReinitialize
                initialValues={initialvalues}
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
                    <th>Update</th>

                </tr>
                {
                    data.map((el, i) => (
                        <tr>
                            <td>{el._id}</td>
                            <td>{el.name}</td>
                            <td>{el.gstno}</td>
                            <td>{el.baseamount}</td>
                            <td>{el.gstpercentage}</td>
                            <td>{el.totalamount}</td>
                            <td>{el.invoiceno}</td>
                            <td>{el.__v}</td>
                            <td>
                                <button onClick={() => deleteData(el._id)}>Delete</button>
                            </td>
                            <td><button onClick={() => editData(el,el._id)}>Update</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default NewApi
