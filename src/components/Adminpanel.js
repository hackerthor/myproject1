import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "./Navbar";

function Adminpanel() {

    const [adusers, setadUsers] = useState([]);
    const navi = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/adusers", { withCredentials: true }).then((res) => {
            setadUsers(res.data);
        })
    }, [adusers]);

    const del = async (id) => {
        const st = await axios.delete(`http://localhost:5000/adusers/${id}`, { withCredentials: true });
        st ? alert(st.data.message) : alert(st.data.message1);
        navi("/dashboard");
    }


    return (
        <>
        <Navbar />
            <div className='container mt-5'>
                <div className="row">
                    <div className='col-lg-12'>
                        <div className='adpo'>
                            
                            <table className='table table-striped table-success'>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Roles</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        adusers.map((item, i) => (
                                            <tr key={item._id}>
                                                <td>{i + 1}</td>
                                                <td>{item.username}</td>
                                                <td>Admin</td>
                                                <td><Link className="btn btn-success" to={`/cp/${item._id}`}>Change password</Link><button type='button' className='btn btn-danger' onClick={() => del(item._id)}>Delete</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminpanel;